import React, { useEffect, useRef, useState } from "react";
import { MapPin, RefreshCw, ZoomIn, ZoomOut, Compass } from "lucide-react";

declare global {
  interface Window {
    BMapGL: any;
    bmapgl_loaded_callback?: () => void;
    handleSetLocFromMap?: (type: "start" | "end", lat: number, lng: number, addr: string) => void;
  }
}

interface MapSuggestionItem {
  title: string;
  address: string;
  province: string;
  city: string;
  location?: {
    lat: number;
    lng: number;
  };
}

interface BaiduMapProps {
  startCoords: { lat: number; lng: number } | null;
  endCoords: { lat: number; lng: number } | null;
  startLoc: string;
  endLoc: string;
  onSelectStartLocation?: (coords: { lat: number; lng: number }, address: string) => void;
  onSelectEndLocation?: (coords: { lat: number; lng: number }, address: string) => void;
  onRouteDistanceCalculated?: (distanceKm: number) => void;
  activeSuggestions?: MapSuggestionItem[];
  activeType?: "start" | "end" | null;
}

export default function BaiduMap({ 
  startCoords, 
  endCoords, 
  startLoc, 
  endLoc,
  onSelectStartLocation,
  onSelectEndLocation,
  onRouteDistanceCalculated,
  activeSuggestions,
  activeType
}: BaiduMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [routingStatus, setRoutingStatus] = useState<"idle" | "routing" | "success" | "failed">("idle");
  const [routeDistanceText, setRouteDistanceText] = useState("");

  // Dynamically load Baidu Maps JS GL script
  useEffect(() => {
    const checkLoaded = () => {
      if (window.BMapGL) {
        setMapLoaded(true);
        return true;
      }
      return false;
    };

    if (checkLoaded()) return;

    // Set polling interval check
    const checkInterval = setInterval(() => {
      if (checkLoaded()) {
        clearInterval(checkInterval);
      }
    }, 100);

    // Timeout fallback after 6s (sometimes slower in low speed connection)
    const timeout = setTimeout(() => {
      if (!window.BMapGL) {
        setLoadError(true);
        clearInterval(checkInterval);
      }
    }, 6000);

    return () => {
      clearInterval(checkInterval);
      clearTimeout(timeout);
    };
  }, []);

  // Dynamic linking of window object callback to latest props state references
  useEffect(() => {
    window.handleSetLocFromMap = (type: "start" | "end", lat: number, lng: number, addr: string) => {
      if (type === "start" && onSelectStartLocation) {
        onSelectStartLocation({ lat, lng }, addr);
      } else if (type === "end" && onSelectEndLocation) {
        onSelectEndLocation({ lat, lng }, addr);
      }
      if (mapInstanceRef.current) {
        mapInstanceRef.current.closeInfoWindow();
      }
    };
    return () => {
      delete window.handleSetLocFromMap;
    };
  }, [onSelectStartLocation, onSelectEndLocation]);

  // Initialize and update Map when loaded and coordinates change
  useEffect(() => {
    if (!mapLoaded || !mapContainerRef.current || !window.BMapGL) return;

    const BMapGL = window.BMapGL;

    // Create map instance if it doesn't exist
    if (!mapInstanceRef.current) {
      try {
        const map = new BMapGL.Map(mapContainerRef.current);
        
        // Disable scroll zoom defaults to prevent annoying accidental wheel scrolling on page scroll
        map.enableScrollWheelZoom(true);
        
        // 3D perspective tilt
        map.setTilt(60); 
        map.setHeading(15);

        // Apply custom style ID as requested explicitly
        map.setMapStyleV2({
          styleId: "02340547577da3f8e68ca56c6890f421"
        });

        // Initialize center on general China/Wuhan region
        const defaultPoint = new BMapGL.Point(114.2582, 30.5815); // Wuhan
        map.centerAndZoom(defaultPoint, 6);

        // Register map clicking listener for direct geographic coordinate selection (prevents location input typos entirely)
        map.addEventListener("click", (e: any) => {
          if (!e.latlng && !e.point) return;
          const p = e.latlng || e.point;
          
          const geocoder = new BMapGL.Geocoder();
          geocoder.getLocation(p, (res: any) => {
            if (res) {
              const address = res.address;
              const surroundingPois = res.surroundingPois || [];
              
              let displayName = address;
              if (surroundingPois && surroundingPois.length > 0) {
                const closestPoi = surroundingPois[0];
                displayName = `${res.addressComponents.province || ""}${res.addressComponents.city || ""}${(res.addressComponents.district || "")} - ${closestPoi.title}`;
              } else if (res.business) {
                displayName = `${res.addressComponents.province || ""}${res.addressComponents.city || ""}${(res.addressComponents.district || "")} - ${res.business.split(',')[0]}`;
              }

              // Create gorgeous popup inside the 3D canvas
              const infoWindowHtml = `
                <div style="padding: 10px; font-family: system-ui, -apple-system, sans-serif; font-size: 13px; line-height: 1.5; color: #1e293b; min-width: 230px; box-sizing: border-box;">
                  <div style="font-weight: 850; color: #000; margin-bottom: 5px; font-size: 13.5px; display: flex; align-items: center; gap: 4px;">
                    🎯 地图精准坐标选点
                  </div>
                  <div style="color: #475569; font-size: 11.5px; border-bottom: 1px solid #f1f5f9; padding-bottom: 8px; margin-bottom: 10px; word-break: break-all; font-weight: 600; line-height: 1.4;">
                    ${displayName}
                  </div>
                  <div style="display: flex; gap: 8px;">
                    <button onclick="window.handleSetLocFromMap && window.handleSetLocFromMap('start', ${p.lat}, ${p.lng}, '${displayName.replace(/'/g, "\\'")}')" style="flex: 1; padding: 7px 5px; background-color: #1058D1; color: white; font-weight: bold; font-size: 11px; border: none; border-radius: 6px; cursor: pointer; transition: all 0.15s; outline: none; box-shadow: 0 1px 3px rgba(16,88,209,0.25);">🚩 设为出发点</button>
                    <button onclick="window.handleSetLocFromMap && window.handleSetLocFromMap('end', ${p.lat}, ${p.lng}, '${displayName.replace(/'/g, "\\'")}')" style="flex: 1; padding: 7px 5px; background-color: #D90429; color: white; font-weight: bold; font-size: 11px; border: none; border-radius: 6px; cursor: pointer; transition: all 0.15s; outline: none; box-shadow: 0 1px 3px rgba(217,4,41,0.25);">🏁 设为目的地</button>
                  </div>
                </div>
              `;

              const infoWindow = new BMapGL.InfoWindow(infoWindowHtml, {
                width: 250,
                height: 125,
                title: ""
              });

              map.openInfoWindow(infoWindow, p);
            }
          });
        });

        mapInstanceRef.current = map;
      } catch (err) {
        console.error("Failed to initialize Baidu Map GL instance:", err);
        setLoadError(true);
        return;
      }
    }

    const map = mapInstanceRef.current;

    // Clear previous markers and lines
    map.clearOverlays();
    setRoutingStatus("idle");

    // If we have active suggestions being searched, show them on the map as interactive markers
    if (activeSuggestions && activeSuggestions.length > 0) {
      const points: any[] = [];
      const BMapGL = window.BMapGL;
      
      activeSuggestions.forEach((item, index) => {
        if (item.location && item.location.lat && item.location.lng) {
          const pt = new BMapGL.Point(item.location.lng, item.location.lat);
          points.push(pt);

          const marker = new BMapGL.Marker(pt, {
            title: item.title
          });
          map.addOverlay(marker);

          const labelText = `${index + 1}. ${item.title.substring(0, 10)}${item.title.length > 10 ? "..." : ""}`;
          const label = new BMapGL.Label(labelText, {
            position: pt,
            offset: new BMapGL.Size(-50, -40)
          });
          label.setStyle({
            color: activeType === "start" ? "#1058D1" : "#D90429",
            fontSize: "11px",
            border: "1px solid #cbd5e1",
            borderRadius: "6px",
            padding: "3px 6px",
            backgroundColor: "white",
            fontWeight: "bold",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)"
          });
          map.addOverlay(label);

          marker.addEventListener("click", () => {
            const displayName = item.title;
            const displayAddr = item.address || `${item.province || ""}${item.city || ""}`;
            const infoWindowHtml = `
              <div style="padding: 10px; font-family: system-ui, -apple-system, sans-serif; font-size: 13px; line-height: 1.5; color: #1e293b; min-width: 230px; box-sizing: border-box;">
                <div style="font-weight: 850; color: #000; margin-bottom: 5px; font-size: 13.5px; display: flex; align-items: center; gap: 4px;">
                  🎯 搜索定位结果 #${index + 1}
                </div>
                <div style="font-weight: 700; color: #1e293b; font-size: 12.5px; line-height: 1.3">
                  ${displayName}
                </div>
                <div style="color: #64748b; font-size: 11px; border-bottom: 1px solid #f1f5f9; padding-bottom: 8px; margin-bottom: 10px; word-break: break-all; line-height: 1.4;">
                  ${displayAddr}
                </div>
                <div style="display: flex; gap: 8px;">
                  <button onclick="window.handleSetLocFromMap && window.handleSetLocFromMap('start', ${item.location.lat}, ${item.location.lng}, '${displayName.replace(/'/g, "\\'")}')" style="flex: 1; padding: 7px 5px; background-color: #1058D1; color: white; font-weight: bold; font-size: 11px; border: none; border-radius: 6px; cursor: pointer; transition: all 0.15s; outline: none; box-shadow: 0 1px 3px rgba(16,88,209,0.25);">🚩 设为出发点</button>
                  <button onclick="window.handleSetLocFromMap && window.handleSetLocFromMap('end', ${item.location.lat}, ${item.location.lng}, '${displayName.replace(/'/g, "\\'")}')" style="flex: 1; padding: 7px 5px; background-color: #D90429; color: white; font-weight: bold; font-size: 11px; border: none; border-radius: 6px; cursor: pointer; transition: all 0.15s; outline: none; box-shadow: 0 1px 3px rgba(217,4,41,0.25);">🏁 设为目的地</button>
                </div>
              </div>
            `;

            const infoWindow = new BMapGL.InfoWindow(infoWindowHtml, {
              width: 250,
              height: 135,
              title: ""
            });
            map.openInfoWindow(infoWindow, pt);
          });
        }
      });

      if (points.length > 0) {
        map.setViewport(points);
        setTimeout(() => {
          if (map.getZoom() > 16) {
            map.setZoom(14);
          }
        }, 150);
      }
      return;
    }

    const geocodeAndRoute = async () => {
      setRoutingStatus("routing");
      
      try {
        let pStart: any = null;
        let pEnd: any = null;

        let startLat = startCoords?.lat || null;
        let startLng = startCoords?.lng || null;
        let endLat = endCoords?.lat || null;
        let endLng = endCoords?.lng || null;

        // Resolve Start Point coordinates if not present but address is known
        if ((!startLat || !startLng) && startLoc.trim()) {
          const pt = await geocodeAddress(startLoc.trim());
          if (pt) {
            startLat = pt.lat;
            startLng = pt.lng;
            pStart = pt;
            // Inform parent so coordinates can be saved in inputs
            if (onSelectStartLocation) {
              onSelectStartLocation({ lat: pt.lat, lng: pt.lng }, startLoc);
            }
          }
        } else if (startCoords) {
          pStart = new BMapGL.Point(startCoords.lng, startCoords.lat);
          startLat = startCoords.lat;
          startLng = startCoords.lng;
        }

        // Resolve End Point coordinates if not present but address is known
        if ((!endLat || !endLng) && endLoc.trim()) {
          const pt = await geocodeAddress(endLoc.trim());
          if (pt) {
            endLat = pt.lat;
            endLng = pt.lng;
            pEnd = pt;
            // Inform parent so coordinates can be saved in inputs
            if (onSelectEndLocation) {
              onSelectEndLocation({ lat: pt.lat, lng: pt.lng }, endLoc);
            }
          }
        } else if (endCoords) {
          pEnd = new BMapGL.Point(endCoords.lng, endCoords.lat);
          endLat = endCoords.lat;
          endLng = endCoords.lng;
        }

        if (startLat && startLng && endLat && endLng) {
          // Perform Baidu directionlite API route search via proxy
          try {
            const originParam = `${startLat},${startLng}`;
            const destParam = `${endLat},${endLng}`;
            
            let response = await fetch(`/api/directionlite?origin=${originParam}&destination=${destParam}`);
            if (!response.ok) {
              response = await fetch(`/functions/api/directionlite?origin=${originParam}&destination=${destParam}`);
            }

            if (response.ok) {
              const data = await response.json();
              if (data.status === 0 && data.result && data.result.routes && data.result.routes[0]) {
                const route = data.result.routes[0];
                const distanceMeters = route.distance || 0;
                const distanceKm = Math.round(distanceMeters / 1000) || 1;
                setRouteDistanceText(`${distanceKm}公里`);
                setRoutingStatus("success");

                if (onRouteDistanceCalculated) {
                  onRouteDistanceCalculated(distanceKm);
                }

                // Parse step coordinates and plot
                const pathPoints: any[] = [];
                if (route.steps && Array.isArray(route.steps)) {
                  route.steps.forEach((step: any) => {
                    if (step.path) {
                      const coordsList = step.path.split(";");
                      coordsList.forEach((coord: string) => {
                        const parts = coord.split(",");
                        if (parts.length === 2) {
                          const lng = parseFloat(parts[0]);
                          const lat = parseFloat(parts[1]);
                          if (!isNaN(lng) && !isNaN(lat)) {
                            pathPoints.push(new BMapGL.Point(lng, lat));
                          }
                        }
                      });
                    }
                  });
                }

                // Add start & end markers
                const ptStart = new BMapGL.Point(startLng, startLat);
                const ptEnd = new BMapGL.Point(endLng, endLat);
                
                const startMarker = new BMapGL.Marker(ptStart, { title: "出发地: " + startLoc });
                const endMarker = new BMapGL.Marker(ptEnd, { title: "目的地: " + endLoc });
                map.addOverlay(startMarker);
                map.addOverlay(endMarker);

                const startLabel = new BMapGL.Label("出发地: " + startLoc.split(" - ").pop(), {
                  position: ptStart,
                  offset: new BMapGL.Size(-60, -45)
                });
                startLabel.setStyle({
                  color: "#1e293b",
                  fontSize: "11px",
                  border: "1px solid #1058D1",
                  borderRadius: "6px",
                  padding: "4px 8px",
                  backgroundColor: "white",
                  fontWeight: "bold",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.12)"
                });
                map.addOverlay(startLabel);

                const endLabel = new BMapGL.Label("抵达地: " + endLoc.split(" - ").pop(), {
                  position: ptEnd,
                  offset: new BMapGL.Size(-60, -45)
                });
                endLabel.setStyle({
                  color: "#1e293b",
                  fontSize: "11px",
                  border: "1px solid #D90429",
                  borderRadius: "6px",
                  padding: "4px 8px",
                  backgroundColor: "white",
                  fontWeight: "bold",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.12)"
                });
                map.addOverlay(endLabel);

                if (pathPoints.length > 0) {
                  const polyline = new BMapGL.Polyline(pathPoints, {
                    strokeColor: "#1058D1",
                    strokeWeight: 6,
                    strokeOpacity: 0.95
                  });
                  map.addOverlay(polyline);
                  map.setViewport(pathPoints);
                } else {
                  drawDirectPolyline(ptStart, ptEnd);
                }
                return;
              }
            }
          } catch (e) {
            console.warn("Proxy route navigation failed via API, falling back to DrivingRoute overlay generator:", e);
          }

          // Fallback to client-side automated DrivingRoute engine if directionlite API has issues
          const ptStart = new BMapGL.Point(startLng, startLat);
          const ptEnd = new BMapGL.Point(endLng, endLat);
          const driving = new BMapGL.DrivingRoute(map, {
            renderOptions: {
              map: map,
              autoViewport: true,
              enableDragging: false
            },
            onSearchComplete: (results: any) => {
              if (driving.getStatus() === 0) {
                setRoutingStatus("success");
                try {
                  const plan = results.getPlan(0);
                  const distance = plan.getDistance(true);
                  setRouteDistanceText(distance);
                  
                  const meters = plan.getDistance(false); // gets distance in meters
                  const distanceKm = Math.round(meters / 1000) || 1;
                  if (onRouteDistanceCalculated) {
                    onRouteDistanceCalculated(distanceKm);
                  }
                } catch (e) {
                  // Ignore text mapping fail
                }
              } else {
                drawDirectPolyline(ptStart, ptEnd);
                setRoutingStatus("failed");
              }
            }
          });

          driving.search(ptStart, ptEnd);
        } else if (pStart) {
          // Only start point is resolved
          map.centerAndZoom(pStart, 12);
          
          const marker = new BMapGL.Marker(pStart, {
            title: "出发地: " + startLoc
          });
          map.addOverlay(marker);
          
          // Custom start label
          const label = new BMapGL.Label("出发地: " + startLoc.split(" - ").pop(), {
            position: pStart,
            offset: new BMapGL.Size(-60, -45)
          });
          label.setStyle({
            color: "#1e293b",
            fontSize: "11px",
            border: "1px solid #1058D1",
            borderRadius: "6px",
            padding: "4px 8px",
            backgroundColor: "white",
            fontWeight: "bold",
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)"
          });
          map.addOverlay(label);
          setRoutingStatus("idle");
        } else if (pEnd) {
          // Only end point is resolved
          map.centerAndZoom(pEnd, 12);
          
          const marker = new BMapGL.Marker(pEnd, {
            title: "目的地: " + endLoc
          });
          map.addOverlay(marker);

          const label = new BMapGL.Label("抵达地: " + endLoc.split(" - ").pop(), {
            position: pEnd,
            offset: new BMapGL.Size(-60, -45)
          });
          label.setStyle({
            color: "#1e293b",
            fontSize: "11px",
            border: "1px solid #D90429",
            borderRadius: "6px",
            padding: "4px 8px",
            backgroundColor: "white",
            fontWeight: "bold",
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)"
          });
          map.addOverlay(label);
          setRoutingStatus("idle");
        } else {
          // No points resolved yet – point on general central China view or a landmark
          const centerPoint = new BMapGL.Point(114.2582, 30.5815);
          map.centerAndZoom(centerPoint, 6);
          setRoutingStatus("idle");
        }
      } catch (err) {
        console.warn("Geocoding or Routing failed inside map:", err);
        setRoutingStatus("failed");
      }
    };

    geocodeAndRoute();
  }, [mapLoaded, startCoords, endCoords, startLoc, endLoc, activeSuggestions, activeType]);

  // Helper method to geocode address queries using Baidu's Client Geocoder
  const geocodeAddress = (addrName: string): Promise<any | null> => {
    return new Promise((resolve) => {
      if (!window.BMapGL) return resolve(null);
      const cleanAddr = addrName.replace(/^[^-\n]+-\s*/, ""); // strip province prefixes if they create noise
      const myGeo = new window.BMapGL.Geocoder();
      myGeo.get(cleanAddr, (point: any) => {
        if (point) {
          resolve(point);
        } else {
          // Try lookup with whole name
          myGeo.get(addrName, (pt2: any) => {
            resolve(pt2 || null);
          });
        }
      });
    });
  };

  // Straight line direct helper if route engine fails inside specific sandboxed preview domains
  const drawDirectPolyline = (pStart: any, pEnd: any) => {
    if (!mapInstanceRef.current || !window.BMapGL) return;
    const BMapGL = window.BMapGL;
    const map = mapInstanceRef.current;

    const startMarker = new BMapGL.Marker(pStart, {
      title: "出发点: " + startLoc
    });
    const endMarker = new BMapGL.Marker(pEnd, {
      title: "目的点: " + endLoc
    });
    map.addOverlay(startMarker);
    map.addOverlay(endMarker);

    // Direct path polyline with beautiful primary blue/red styling
    const polyline = new BMapGL.Polyline([pStart, pEnd], {
      strokeColor: "#1058D1",
      strokeWeight: 6,
      strokeOpacity: 0.8
    });
    map.addOverlay(polyline);

    // View boundaries adjustment
    map.setViewport([pStart, pEnd]);
  };

  // Zoom control interactions
  const handleZoomIn = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.zoomOut();
    }
  };

  const handleResetPerspective = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setTilt(60);
      mapInstanceRef.current.setHeading(15);
      if (startCoords || endCoords) {
        const BMapGL = window.BMapGL;
        const pts = [];
        if (startCoords) pts.push(new BMapGL.Point(startCoords.lng, startCoords.lat));
        if (endCoords) pts.push(new BMapGL.Point(endCoords.lng, endCoords.lat));
        if (pts.length > 0) mapInstanceRef.current.setViewport(pts);
      }
    }
  };

  if (loadError) {
    return (
      <div className="w-full h-[320px] sm:h-[450px] bg-slate-100 rounded-2xl border border-slate-200 flex flex-col items-center justify-center p-6 text-center space-y-3">
        <MapPin className="h-10 w-10 text-slate-400" />
        <h5 className="font-bold text-slate-700 text-sm">暂无法载入百度 WebGL 卫星流图</h5>
        <p className="text-xs text-slate-400 max-w-sm">
          可能是由于您处于本地防火墙、广告拦截插件或网络离线环境。您可以继续填写表单，我们已为您配套本地全能三甲医院数据库，依然可离线为您高精度计算！
        </p>
      </div>
    );
  }

  return (
    <div className="w-full relative shadow-inner overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50 flex flex-col">
      
      {/* Dynamic top badge describing routing state */}
      <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
        <div className="bg-slate-900/90 text-white backdrop-blur px-3 py-1.5 rounded-lg border border-slate-800 flex items-center space-x-2 text-[11px] font-bold shadow-md">
          <span className="flex h-2 w-2 relative">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${routingStatus === "routing" ? "bg-amber-400" : "bg-emerald-400"}`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 ${routingStatus === "routing" ? "bg-amber-400" : "bg-emerald-500"}`}></span>
          </span>
          <span>
            {routingStatus === "idle" && "3D百度数字绿洲地图已就绪"}
            {routingStatus === "routing" && "实时路网导航算法测算中..."}
            {routingStatus === "success" && `路线规划成功 ${routeDistanceText ? `(${routeDistanceText})` : ""}`}
            {routingStatus === "failed" && "地图离线直连测距保障生效中"}
          </span>
        </div>

        {mapLoaded && (
          <button 
            type="button"
            onClick={handleResetPerspective}
            className="pointer-events-auto bg-white/95 hover:bg-white text-slate-700 hover:text-blue-700 h-7 w-7 rounded-lg flex items-center justify-center border border-slate-200 shadow-md transition-all"
            title="复位3D俯视视角"
          >
            <Compass className="h-4 w-4 animate-spin-slow" />
          </button>
        )}
      </div>

      {/* Floating map controls */}
      {mapLoaded && (
        <div className="absolute bottom-4 right-4 z-10 flex flex-col space-y-1">
          <button 
            type="button"
            onClick={handleZoomIn}
            className="bg-white/95 hover:bg-white text-slate-700 h-8 w-8 rounded-lg border border-slate-200 shadow-md font-extrabold flex items-center justify-center transition-all"
          >
            <ZoomIn className="h-4 w-4" />
          </button>
          <button 
            type="button"
            onClick={handleZoomOut}
            className="bg-white/95 hover:bg-white text-slate-700 h-8 w-8 rounded-lg border border-slate-200 shadow-md font-extrabold flex items-center justify-center transition-all"
          >
            <ZoomOut className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Actual Map Canvas DOM */}
      <div 
        ref={mapContainerRef} 
        id="baidu-gl-express-canvas" 
        className="w-full h-[320px] sm:h-[420px] lg:h-[480px] bg-slate-905 relative"
      />

      {/* Bottom informational bar */}
      <div className="bg-slate-900 border-t border-slate-800 p-2.5 text-center text-[10.5px] text-slate-400 font-bold tracking-tight">
        ✨ 已经接通百度高精度 3D WebGL 智能流图引擎 • 样式ID: 023405...c6890f421
      </div>
    </div>
  );
}
