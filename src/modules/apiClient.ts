export const fetchMemoFromLocalstorage = () => {
  return new Promise(resolve => {
    chrome.storage.local.get(["memos"], result => {
      console.log("used chrome api");
      console.log({ memos: result.memos });
      resolve(result.memos);
    });
  });
};
