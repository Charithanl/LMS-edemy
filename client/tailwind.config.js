module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // ← This tells Tailwind to scan all your React files
  ],
  theme: {
    extend: {
      fontSize :{
        'course-details-heading-small' :['26px', '36px'],
        'course-details-heading-large' :['36px', '44px'],
        'home-heading-small' :['28px', '34px'],
        'home-heading-large' :['48px', '44px'],
        'default' : ['15px', '21px']
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))', // Adjust the min-width as needed
      },
    },
  },
  plugins: [],
}
