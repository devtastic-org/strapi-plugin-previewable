/*
 *
 * Website preview button.
 *
 */

import React, { memo, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useCMEditViewDataManager } from "@strapi/helper-plugin";
import { useIntl } from "react-intl";
import { Button } from "@strapi/design-system";
import { Eye } from "@strapi/icons";

import getTrad from "../../utils/getTrad";

const PreviewButton = () => {
  const { id } = useParams();
  const state = useCMEditViewDataManager();
  const { formatMessage } = useIntl();

  console.log(id, state);

  return (
    <Button startIcon={<Eye />} variant="secondary">
      {formatMessage({
        id: getTrad("label.button"),
        defaultMessage: "Preview",
      })}
    </Button>
  );
};

export default memo(PreviewButton);
