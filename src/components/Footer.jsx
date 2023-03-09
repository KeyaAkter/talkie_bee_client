const Footer = () => {
  return (
    <footer className="text-center py-20 text-gray-500">
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-emerald-500">TalkieBee</span>. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
