/**
 *
 * Initializer
 *
 */

import React, { useEffect, useRef } from "react";

import pluginId from "../../utils/pluginId";

const Initializer = ({ setPlugin }) => {
  const ref = useRef();
  ref.current = setPlugin;

  useEffect(() => {
    ref.current(pluginId);
  }, []);

  return null;
};

export default Initializer;
