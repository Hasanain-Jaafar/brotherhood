import { renderPwaIcon } from "@/lib/pwa-icon";

export const dynamic = "force-static";

// Android crops maskable icons to a circle/squircle. The badge in brotherhood.jpg
// already sits inside the central safe zone, so the full image is used edge to edge.
export function GET() {
  return renderPwaIcon(512, 1);
}
