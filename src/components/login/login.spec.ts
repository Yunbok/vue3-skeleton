import axios from "axios";
import {mount} from "@vue/test-utils";
import Login from "@/components/login/Login.vue";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const testData = {
  name: "jun",
  phone: "01071256046",
};

it("테스트얌", async () => {
  mockedAxios.get.mockImplementation((url) => {
    switch (url) {
      case "/getUser":
        return Promise.resolve(testData);
      default:
        return Promise.reject(new Error("not found"));
    }
  });

  const response = await test;
  expect(response).toEqual({ name: "jun", phone: "01071256046" });
});

it('should ', function () {
  mount(Login)
  console.log(mount)
});
