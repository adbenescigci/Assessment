import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import { Counter } from "./counter/Counter";

const ReduxTest = () => {
  return (
    <DefaultLayout>
      <div>Redux Test</div>
      <Counter />
    </DefaultLayout>
  );
};

export default ReduxTest;
