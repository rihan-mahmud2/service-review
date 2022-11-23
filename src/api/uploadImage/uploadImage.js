export const sendImageToImagDb = async (img) => {
  const url = `https://api.imgbb.com/1/upload?key=0cc7c5d9462483123e44c8df054d41da`;
  const formData = new FormData();
  formData.append("image", img);
  const result = await fetch(url, {
    method: "POST",
    body: formData,
  });
  const data = await result.json();
  return data.data?.display_url;
};
