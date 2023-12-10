import stylex from "@stylexjs/stylex";
const s = stylex.create({
  redbox: {
    backgroundColor: "red",
    width: 100,
    height: 100,
  },
});

export default function Home() {
  return (
    <main>
      <div className={stylex(s.redbox)}>styleX</div>
    </main>
  );
}
