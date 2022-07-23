/*
 * Copyright (c) 2022-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import { Box, Link as LinkMui } from '@mui/material';
import { h } from 'preact';

import { useOnSubmit } from '../../hooks';
import { useTranslation } from '../../lib/okta-i18n';
import { ClickHandler, LinkElement, UISchemaElementComponent } from '../../types';
import { getLabelName } from '../helpers';

const Link: UISchemaElementComponent<{
  uischema: LinkElement
}> = ({ uischema }) => {
  const { options } = uischema;
  const onSubmitHandler = useOnSubmit();
  const { t } = useTranslation();

  const label = t(getLabelName(options?.label));

  const onClick: ClickHandler = async (e) => {
    e.preventDefault();

    onSubmitHandler({
      params: options.actionParams,
      actionFn: options.action,
    });
  };

  return (
    <Box marginTop={4}>
      {
        options?.action !== undefined ? (
          <LinkMui
            // eslint-disable-next-line no-script-url
            href="javascript:void(0)"
            onClick={onClick}
          >
            {label}
          </LinkMui>
        ) : <LinkMui href={options?.href}>{label}</LinkMui>
      }
    </Box>
  );
};

export default Link;
