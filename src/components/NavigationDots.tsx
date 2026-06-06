interface NavigationDotsProps {
  active: string;
}

const NavigationDots = ({ active }: NavigationDotsProps) => {
  return (
    <div className="app__navigation">
      {["home", "about", "experience", "projects", "contributions", "contact"].map((item) => (
        <a
          href={`#${item}`}
          key={item + "dot"}
          className="app__navigation-dot"
          style={
            active === item
              ? { backgroundColor: "#F7AB08" }
              : undefined
          }
        />
      ))}
    </div>
  );
};

export default NavigationDots;
