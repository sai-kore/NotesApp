const Footer = () => {
  const footerStyle = {
    color: "green",
    fontStyle: "italic",
  };

  return (
    <div style={footerStyle}>
      <br />
      <p>
        {/* Note app, Department of Computer Science, University of Helsinki 2025 */}
        Notes App, Made and Deployed by Sai Kore
      </p>
    </div>
  );
};

export default Footer;
