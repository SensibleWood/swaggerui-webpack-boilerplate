window.onload = function() {
  // Build a system
  const ui = SwaggerUIBundle({
    urls: [{
      "name": "Boilerplate",
      "url": "swagger.yaml"
    }],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  window.ui = ui
}
