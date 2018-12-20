const mock = () => {
  let storage: { [ key: string ]: any } = {};
  return {
    get: (key: string) => key in storage ? storage[ key ] : null,
    set: (key: string, value: any) => storage[ key ] = value || '',
    remove: (key: string) => delete storage[ key ],
    clear: () => storage = {},
  };
};

Object.defineProperty(window, 'localStorage', { value: mock() });
Object.defineProperty(window, 'sessionStorage', { value: mock() });
Object.defineProperty(window, 'getComputedStyle', {
  value: () => [ '-webkit-appearance' ]
});
