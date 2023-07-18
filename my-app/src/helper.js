export const request = () => {
  return fetch("https://mate-academy.github.io/react_phone-catalog/_new/products.json")
    .then(response => {
      if (!response.ok) {
        return Promise.reject(
          `${response.status} - ${response.statusText}`
        );
      }

      return response.json();
    });
};
