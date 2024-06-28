
export default function Services() {
    return (
      <div className="font-futurapt w-full max-w-5xl mx-auto py-12 md:py-16 lg:py-20">
        <h1 className=" text-3xl md:text-4xl font-bold mb-8 text-center text-primary">Our Healthcare Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6 hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
            <div className="flex items-center mb-4">
              <BoneIcon className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-xl font-semibold">Musculoskeletal Conditions</h2>
            </div>
            <p className="text-muted-foreground">Comprehensive treatment for musculoskeletal issues.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
            <div className="flex items-center mb-4">
              <PowerIcon className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-xl font-semibold">Pain Management</h2>
            </div>
            <p className="text-muted-foreground">Effective strategies to manage and alleviate pain.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
            <div className="flex items-center mb-4">
              <ClubIcon className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-xl font-semibold">Sports Injuries</h2>
            </div>
            <p className="text-muted-foreground">Specialized care for athletes and sports enthusiasts.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
            <div className="flex items-center mb-4">
              <HandIcon className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-xl font-semibold">Hand Injuries</h2>
            </div>
            <p className="text-muted-foreground">Comprehensive treatment for hand and wrist conditions.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
            <div className="flex items-center mb-4">
              <SyringeIcon className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-xl font-semibold">Acupuncture</h2>
            </div>
            <p className="text-muted-foreground">Holistic approach to pain relief and wellness.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
            <div className="flex items-center mb-4">
              <RatioIcon className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-xl font-semibold">Falls and Balance Assessment</h2>
            </div>
            <p className="text-muted-foreground">Comprehensive evaluation and treatment for balance issues.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
            <div className="flex items-center mb-4">
              <ShowerHeadIcon className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-xl font-semibold">Hydrotherapy Assessment</h2>
            </div>
            <p className="text-muted-foreground">Aquatic therapy for improved mobility and pain relief.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
            <div className="flex items-center mb-4">
              <BedIcon className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-xl font-semibold">24-hour Postural Care Management</h2>
            </div>
            <p className="text-muted-foreground">Comprehensive approach to maintaining proper posture.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
            <div className="flex items-center mb-4">
              <AccessibilityIcon className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-xl font-semibold">Aids and Appliances for Home</h2>
            </div>
            <p className="text-muted-foreground">Assistive devices to support independent living.</p>
          </div>
        </div>
      </div>
    )
  }
  
  function AccessibilityIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="16" cy="4" r="1" />
        <path d="m18 19 1-7-6 1" />
        <path d="m5 8 3-3 5.5 3-2.36 3.5" />
        <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
        <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
      </svg>
    )
  }
  
  
  function BedIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 4v16" />
        <path d="M2 8h18a2 2 0 0 1 2 2v10" />
        <path d="M2 17h20" />
        <path d="M6 8v9" />
      </svg>
    )
  }
  
  
  function BoneIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z" />
      </svg>
    )
  }
  
  
  function ClubIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z" />
        <path d="M12 17.66L12 22" />
      </svg>
    )
  }
  
  
  function HandIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
        <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
        <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
        <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
      </svg>
    )
  }
  
  
  function PowerIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v10" />
        <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
      </svg>
    )
  }
  
  
  function RatioIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="12" height="20" x="6" y="2" rx="2" />
        <rect width="20" height="12" x="2" y="6" rx="2" />
      </svg>
    )
  }
  
  
  function ShowerHeadIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m4 4 2.5 2.5" />
        <path d="M13.5 6.5a4.95 4.95 0 0 0-7 7" />
        <path d="M15 5 5 15" />
        <path d="M14 17v.01" />
        <path d="M10 16v.01" />
        <path d="M13 13v.01" />
        <path d="M16 10v.01" />
        <path d="M11 20v.01" />
        <path d="M17 14v.01" />
        <path d="M20 11v.01" />
      </svg>
    )
  }
  
  
  function SyringeIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m18 2 4 4" />
        <path d="m17 7 3-3" />
        <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" />
        <path d="m9 11 4 4" />
        <path d="m5 19-3 3" />
        <path d="m14 4 6 6" />
      </svg>
    )
  }