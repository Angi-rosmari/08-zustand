import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Developer: Angela Rebii</p>
          <p>
            Contact us:
            <a href="mailto:anzhelarebii@gmail.com">anzhelarebii@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
