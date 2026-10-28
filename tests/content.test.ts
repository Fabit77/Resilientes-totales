import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { stories } from "../content/stories";
import { seasons } from "../content/site";
test("las fichas tienen slugs únicos, recursos existentes y una fuente oficial", () => {
  assert.equal(new Set(stories.map((s) => s.slug)).size, stories.length);
  for (const story of stories) {
    assert.match(story.slug, /^[a-z0-9-]+$/);
    assert.equal(new URL(story.sourceUrl).hostname, "www.13.cl");
    assert.equal(existsSync(`public${story.imagen}`), true);
    assert.equal(
      seasons.some((s) => s.number === story.temporada && s.year === story.año),
      true,
    );
    assert.equal(story.videoUrl, null);
  }
});
