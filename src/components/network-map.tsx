import { RiMapPin2Fill } from "react-icons/ri";
import { useState } from "react";

import { indiaMapViewBox, indiaStates, projectToMap } from "@/data/india-map";
import { networkCities, networkStates } from "@/data/site";

const highlighted = new Set<string>(networkStates);
const pins = networkCities.map((city) => ({
  ...city,
  hq: "hq" in city,
  ...projectToMap(city.lat, city.lon),
}));

export function NetworkMap() {
  const [active, setActive] = useState<string>("Satara");
  const current = pins.find((pin) => pin.name === active);
  const groups = [...networkStates, "Head office"].map((state) => ({
    state,
    cities: pins.filter((pin) => pin.state === state),
  }));

  return (
    <div className="grid items-start gap-8 sm:grid-cols-[minmax(0,1fr)_11rem]">
      <div className="relative mx-auto w-full max-w-md rounded-lg border border-border bg-background p-4">
        <svg
          viewBox={indiaMapViewBox}
          className="h-auto w-full"
          role="img"
          aria-label="Map of India highlighting Maharashtra, Karnataka and Madhya Pradesh, with Akashganga sales and service locations"
        >
          {indiaStates.map((state) => (
            <path
              key={state.name}
              d={state.d}
              className={
                highlighted.has(state.name)
                  ? "fill-brand/35 stroke-brand"
                  : "fill-map-land stroke-background"
              }
              strokeWidth={highlighted.has(state.name) ? 0.9 : 0.6}
              strokeLinejoin="round"
            />
          ))}
          {pins.map((pin) => (
            <g key={pin.name} onMouseEnter={() => setActive(pin.name)} className="cursor-pointer">
              {pin.hq && <circle cx={pin.x} cy={pin.y} r={7} className="map-pulse fill-brand/40" />}
              <circle
                cx={pin.x}
                cy={pin.y}
                r={pin.hq ? 4.2 : active === pin.name ? 3.6 : 2.8}
                className={`stroke-background transition-all ${pin.hq || active === pin.name ? "fill-primary" : "fill-brand"}`}
                strokeWidth={1.2}
              />
            </g>
          ))}
          {current && (
            <g pointerEvents="none">
              <rect
                x={current.x + 7}
                y={current.y - 9}
                width={current.name.length * 5.2 + 12}
                height={15}
                rx={3}
                className="fill-foreground"
              />
              <text
                x={current.x + 13}
                y={current.y + 1.6}
                className="fill-background font-display text-[8px] font-bold"
              >
                {current.name}
              </text>
            </g>
          )}
        </svg>
      </div>

      <div className="space-y-5">
        {groups.map((group) => (
          <div key={group.state}>
            <h3 className="font-display text-sm font-bold text-foreground">{group.state}</h3>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {group.cities.map((city) => (
                <button
                  key={city.name}
                  type="button"
                  onMouseEnter={() => setActive(city.name)}
                  onFocus={() => setActive(city.name)}
                  onClick={() => setActive(city.name)}
                  aria-pressed={active === city.name}
                  className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-semibold transition ${
                    active === city.name
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-muted-foreground hover:border-brand hover:text-primary"
                  }`}
                >
                  <RiMapPin2Fill className="h-3 w-3" />
                  {city.name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
