export default defineNuxtPlugin(() => {
    const preview = ref(false);
  
    const previewMiddleware = async (to) => {
      const isPreview = to.query.preview && to.query.preview === 'true';
  
      // if you don’t need the part with `to.query.token` just set `preview.value = true`
      if (isPreview && to.query.token) {
        preview.value = { token: to.query.token };
        return;
      }
  
      // If leaving the preview page, refresh the page to exit preview mode
      if (preview.value) {
        window.location = to.fullPath;
        return;
      }
    };
  
    addRouteMiddleware('preview', previewMiddleware, { global: true });
  
    return { provide: { preview } };
  });