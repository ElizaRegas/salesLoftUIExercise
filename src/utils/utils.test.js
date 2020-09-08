import utils from "./utils.js";

test("getLocalMessages returns array of messages when no local storage value exists", () => {
  // defining local storage for headless test
  Object.defineProperty(window, "localStorage", {
    value: {
      getItem: jest.fn(() => null),
      setItem: jest.fn(() => null),
    },
    writeable: true,
  });

  // mock data to fill the required parameter for the function call
  const mockMessages = {
    messages: [
      {
        id: "1",
        subject: "Hello",
        sender: "bob.smith@gmail.com",
        body:
          "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia vestibulum eros, a aliquet odio fermentum et. Fusce in volutpat est, eu aliquam ante. Integer at sapien sit amet nisl venenatis ullamcorper eu sed magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a odio vitae risus dictum pellentesque in vehicula leo. Nam massa sem, pretium at lacus quis, aliquam facilisis odio. Maecenas risus purus, dapibus sed viverra a, efficitur eget leo. Integer quis magna id ante ornare euismod. Nunc aliquet arcu sit amet tincidunt feugiat. Ut et sapien ut leo blandit egestas a non arcu.</p><p>Sed finibus rhoncus nulla, eu molestie urna volutpat non. Etiam molestie faucibus nisi eget molestie. Vestibulum porta a leo a scelerisque. Mauris eget nisl sapien. Aliquam consectetur sed massa eget accumsan. Pellentesque eget arcu quam. Vivamus feugiat lacinia laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed quis quam vitae lorem rhoncus viverra vel et dolor. Sed pharetra cursus risus sit amet accumsan.</p>",
        tags: ["work"],
        date: "2017-03-05T03:25:43.511Z",
      },
    ],
  };

  // the value expected to return from the function call
  const expected = [
    {
      ...mockMessages.messages[0],
      isSelected: false,
      isTrash: false,
    },
  ];
  const actual = utils.getLocalMessages(mockMessages);

  // assertions
  expect(window.localStorage.getItem).toHaveBeenCalledTimes(1); 
  expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
  expect(window.localStorage.setItem).toBeCalledWith("messages", JSON.stringify(expected));
  expect(expected).toEqual(actual);
});
