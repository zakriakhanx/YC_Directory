import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://e4c37661070dbd0280ac5fadb1e33997@o4509785438289920.ingest.de.sentry.io/4509785444057168",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
    }),
  ],
});