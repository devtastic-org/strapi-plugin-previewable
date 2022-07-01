/*
 *
 * Website preview.
 *
 */

import React, { memo, useEffect, useState } from "react";
import { request } from "@strapi/helper-plugin";

import pluginId from "../../utils/pluginId";

const Preview = () => {
  const [websiteUrl, setWebsiteUrl] = useState(null);

  useEffect(() => {
    (async () => {
      const config = await request(`/${pluginId}/config`, {
        method: "GET",
      });

      setWebsiteUrl(config.websiteUrl);
    })();
  }, []);

  return websiteUrl ? (
    <iframe
      src={websiteUrl}
      loading="lazy"
      style={{ height: "calc(100vh - 2px)", width: "100%" }}
    />
  ) : null;
};

export default memo(Preview);
