export default () => (
  <style jsx global>
    {`
      :root {
        --site-bg: #0000ff;
        --primary-light: rgba(255, 255, 255, 1);
        --secondary: rgba(46, 62, 72, 0.6);
        --secondary-light: rgba(255, 255, 255, 0.7);
        --hint: rgba(46, 62, 72, 0.35);
        --hint-light: rgba(255, 255, 255, 0.35);
        --error: #ff5b0f;
        --shadow: rgba(235, 237, 242, 0.9);
        --light-text: rgba(0, 0, 0, 0.87);
        --secondary-text: rgba(0, 0, 0, 0.67);
        --primary-text: #fff;

        /** New color scheme **/
        --primary-hue: #d92121;
        --primary-hue-light: #9d72de;
        --grey-bg: #f5f5f5;
        --background-dark: #000;
        --menu-bg-color: #fff;
        --off-white: #fcfaf9;
        --hue-1: #2effca;
        --hue-3: #e9d758;
        --hue-2: #be8dd9;
        --hue-4: #e4b7e4;
        --hue-5: #cceaff;

        /** Utility Variables **/

        --border-radius: 5px;
        --border: 2px solid #222;
        /** Use for the outline effect on large text */
        --text-outline: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
          1px 1px 0 #fff;
        --x-background: linear-gradient(
            to top left,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0) calc(50% - 0.8px),
            rgb(255, 255, 255) 50%,
            rgba(0, 0, 0, 0) calc(50% + 0.8px),
            rgba(0, 0, 0, 0) 100%
          ),
          linear-gradient(
            to top right,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0) calc(50% - 0.8px),
            rgb(255, 255, 255) 50%,
            rgba(0, 0, 0, 0) calc(50% + 0.8px),
            rgba(0, 0, 0, 0) 100%
          );
      }
    `}
  </style>
);
