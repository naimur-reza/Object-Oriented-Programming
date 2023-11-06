{
  //

  // type guard

  type Alphanumeric = string | number;

  const add = (a: Alphanumeric, b: Alphanumeric): Alphanumeric => {
    if (typeof a === "number" && typeof b === "number") return a + b;
    return a.toLocaleString() + b.toLocaleString();
  };

  // in guard

  interface Guest {
    name: string;
    email: string;
  }

  interface Admin {
    name: string;
    email: string;
    role: "admin";
  }

  const getUser = (values: Guest | Admin) => {
    if ("role" in values)
      // now we can do anything with admin property. That is called type guard
      return values.role;
  };

  //
}
