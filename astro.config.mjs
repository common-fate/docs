// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/": {
      status: 302,
      destination: "/introduction",
    },
  },
  integrations: [
    starlight({
      title: "Common Fate",
      logo: {
        src: "./src/assets/common-fate-logo.svg",
        replacesTitle: true,
      },
      social: {
        github: "https://github.com/common-fate",
      },
      components: {
        Header: "./src/components/Header.astro",
        Sidebar: "./src/components/Sidebar.astro",
      },

      head: [
        {
          tag: "script",
          attrs: {
            src: "https://plausible.io/js/script.js",
            "data-domain": "docs.commonfate.io",
            defer: true,
          },
        },
      ],

      sidebar: [
        {
          label: "Setup",
          items: [
            { slug: "introduction" },
            { slug: "setup/deploy" },
            { slug: "setup/glossary" },
            { slug: "setup/built-in-roles" },
            { slug: "setup/troubleshooting" },
            { slug: "setup/security" },
            { slug: "setup/customize-auth-domain" },
            { slug: "setup/backups" },
            { slug: "setup/alerts" },
            { slug: "setup/managed-monitoring" },
            { slug: "setup/custom-resource-instances" },
          ],
        },
        {
          label: "Configuration",
          items: [
            { slug: "config/introduction" },
            { slug: "config/terraform" },
            { slug: "config/understanding_access" },
            { slug: "config/workflows" },
            { slug: "config/selectors" },
            { slug: "config/availabilities" },
          ],
        },
        {
          label: "User Guide",
          items: [
            { slug: "user-guide/cli/quickstart" },
            { slug: "user-guide/cli/requesting-access" },
            { slug: "user-guide/cli/config" },
          ],
        },
        {
          label: "Authorization Policies",
          items: [
            {
              slug: "authz/introduction",
            },
            {
              slug: "authz/validation",
            },
            {
              slug: "authz/testing",
            },
            {
              slug: "authz/vscode",
            },
            {
              slug: "authz/ci",
            },
            {
              slug: "authz/breakglass",
            },
          ],
        },
        {
          label: "Observability",
          items: [
            { slug: "observability/events" },
            { slug: "observability/authorization" },
            { slug: "observability/preview-access" },
            { slug: "observability/integrations" },
          ],
        },
        {
          label: "Identity Integrations",
          items: [
            { slug: "integrations/sso/entra" },
            { slug: "integrations/sso/aws-idc" },
            { slug: "integrations/sso/okta" },
            { slug: "integrations/pagerduty" },
            { slug: "integrations/opsgenie" },
          ],
        },
        {
          label: "Access Integrations",
          items: [
            { slug: "integrations/aws" },
            { slug: "integrations/awsrds" },
            { slug: "integrations/awseks" },
            { slug: "integrations/aws-resources" },
            { slug: "integrations/auth0" },
            { slug: "integrations/bigquery" },
            { slug: "integrations/datastax" },
            { slug: "integrations/entra" },
            { slug: "integrations/gcp" },
            { slug: "integrations/iam-identity-center-groups" },
            { slug: "integrations/okta" },
          ],
        },
        {
          label: "Context Integrations",
          items: [{ slug: "integrations/jira" }],
        },
        {
          label: "Notification Integrations",
          items: [
            { slug: "integrations/slack" },
            { slug: "integrations/webhook" },
          ],
        },
        {
          label: "Audit Log Integrations",
          items: [{ slug: "integrations/s3-log-destination" }],
        },
        {
          label: "Migration Guide",
          items: [{ slug: "migration-guide/migration-guide" }],
        },

        {
          label: "Granted",
          items: [
            { slug: "granted/introduction" },
            { slug: "granted/getting-started" },
            {
              label: "Usage",
              items: [
                { slug: "granted/usage/assuming-roles" },
                { slug: "granted/usage/console" },
                { slug: "granted/usage/browser-extension" },
                { slug: "granted/usage/headless" },
                { slug: "granted/usage/export-credentials" },
                { slug: "granted/usage/dotenv" },
                { slug: "granted/usage/automatic-config-generation" },
                { slug: "granted/usage/storing-iam-credentials-securely" },
                { slug: "granted/usage/profile-registry" },
              ],
            },
            { slug: "granted/configuration" },
            {
              label: "Recipes",
              items: [
                { slug: "granted/recipes/access-requests" },
                { slug: "granted/recipes/automatically_reassume" },
                { slug: "granted/recipes/cache-commands" },
                { slug: "granted/recipes/credential-process" },
                { slug: "granted/recipes/disable-usage-tips" },
                { slug: "granted/recipes/eks" },
                { slug: "granted/recipes/inline-role-assumption" },
                { slug: "granted/recipes/pass" },
                { slug: "granted/recipes/ubuntu-keyring" },
                { slug: "granted/recipes/wsl-vscode" },
              ],
            },
            { slug: "granted/faq" },
            { slug: "granted/troubleshooting" },
            { slug: "granted/security" },
            {
              label: "Internals",
              items: [
                { slug: "granted/internals/different-assumers" },
                { slug: "granted/internals/shell-alias" },
              ],
            },
            {
              label: "Plugins",
              items: [{ slug: "granted/plugins/aws-rds" }],
            },
          ],
        },
      ],
    }),
  ],
});
