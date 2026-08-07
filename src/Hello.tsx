interface Props {
  name?: string;
  color?: string;
}

// export const Hello = ({ name, color = 'blue' }: Props) => {
//   return <div style={{ color }}>Hello, {name}</div>;
// };

function Hello({ name = 'flature', color = 'blue' }: Props) {
  return (
    <>
      <div style={{ color }}>Hello, {name}</div>
      <div className='entry'>
        Scroll to Top buttons allow your website visitors to easily scroll back
        to the top of your page with one click of the button. This gives your
        website better navigation and also adds a more professional look to your
        current website layout.
        <p>
          Our scroll to top buttons can be quickly installed onto all Websites,
          Blogs, WordPress, and more! Simply choose a button and then copy and
          paste the relevant code into either your <b>Footer</b> section or the
          bottom of your HTML page, just before the <b>&lt;/body&gt;</b> tag. We
          recommend inserting the code at the bottom of your page to optimize
          loading times for your Website.
        </p>
        <h3>Ensure Safe Browsing with Digr and Safe Search</h3>
        <p>
          to filter out adult websites, ensuring a safer online experience. All
          of these Google safe search engines prioritize educational websites,
          making them ideal for kids, teens, and adults who want to avoid
          inappropriate and insecure content in their search results.
        </p>
        <p>
          Digr and Safe Kids Search work by actively screening out adult content
          and other potentially harmful websites, providing a cleaner, more
          focused browsing environment. These tools not only block inappropriate
          sites but also emphasize educational resources, helping users find
          reliable information and learning materials easily. This makes them
          perfect for families, educators, and anyone looking to enhance their
          online safety while accessing valuable educational content.
        </p>
        <p>Don't have a website? Use our .</p>
        <h3>Scroll to top Button Code</h3>
        <p>
          Below are free Scroll to Top button codes for you to use. Choose your
          favorite scroll-up image, copy the code, and insert it into your
          website at no cost. If you enjoy our free buttons, please support us
          by visiting our website partners: Digr, DinoSearch, Kids Search, and
          Safe Search, listed at the top of the page. Thank you for your
          support; we appreciate it!
        </p>
      </div>
    </>
  );
}

export default Hello;
