import { styled } from "@src/styles/css";
export default function Home() {
  console.log(typeof "div");
  return (
    <>
      <A style={{}}>hello</A>
      <B>hello</B>
    </>
  );
}

const A = styled("div")`
  color: red;
`;

const B = styled("p")`
  color: red;
`;
