export const useMedia = () => {
  const getUrl = (media) => {
    return `${process.env.NEXT_PUBLIC_API}${media?.data?.attributes.url}`;
  };

  return { getUrl };
};
