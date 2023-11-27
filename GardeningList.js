import React from 'react';


const GardeningList = () => {
  const Gardening = [
    {
      id: 1,
      name: 'STRAWBERRY',
       botanicalname: 'Fragaria ananassa',
       specialfeatures:'high levels of vitamin c',
      About: ['Light : direct sunlight','Fertilizer: balanced fertilizer','Propagation: Stolens'],
      profilePicture: 'https://5.imimg.com/data5/IP/SU/MY-46960546/natural-strawberry.jpg',
    },
    {
      id: 2,
      name: 'POMEGRANATE',
      botanicalname: 'Punica garanatum',
      specialfeatures:'powerful anti-oxident',
      About: ['Light : Moderate sunlight','Fertilizer: vermicompost','Propagation: Hard wood cuttings'],
      profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSls53q-GMYx_phzVGgc80SNOhTODawVwMt8Q&usqp=CAU',
    },
    {
      id: 3,
      name: 'BANANA',
      botanicalname: 'Musa paradisiaca',
      specialfeatures:'Contains dietary fibres',
      About: ['Light : full sunlight','Fertilizer: high potassium fertilizer','Propagation: Rhizosomes'],
      profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVPq9agX9xfIskW55jvtpxNOqwyaR0Y8ZFww&usqp=CAU',
    },
    {
      id: 2,
      name: 'TOMATO',
      botanicalname: 'Solanum lycopersicum',
      specialfeatures: 'adapative to all seasons',
      About: ['Crop duration : 120 days','Watering: once a week','Season: Warm'],
      profilePicture: 'https://cccapi.cococa.in/public/uploads/product_images/product_image_1200x1200/test-Tomato-1kg.jpg',
    },
    
    {
      id: 3,
      name: 'CAPSICUM',
      botanicalname: 'Capsicum',
      specialfeatures:'low water needs',
      About: ['Crop duration : 180 days','Watering: once a week','Season: Cold'],
      profilePicture: 'https://www.agroexporters.net/uploaded-files/thumb-cache/member_127/thumb---capsicum4984.jpg',
    },
    
    {
      id: 4,
      name: 'CHILLY',
      botanicalname: 'Brassica olercea',
      specialfeatures:'easy to grow',
      About: ['Crop duration : 150 days','Watering: once a week','Season: Warm/Cold'],
      profilePicture: 'https://exat8rt6fi5.exactdn.com/wp-content/uploads/2022/05/chilli-01.jpg?strip=all&lossy=1&ssl=1',
    },
    
 {
      id: 5,
      name: 'DAISY',
      botanicalname: 'Bellis perennis',
      specialfeatures:'Low maintenance,Remove pollutants',
      About: ['Light : full sunlight','Fertilizer: low nitrogen fertilizer','Propagation: Seeds/stem cutting'],
      profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMuqMAKJH6sJn23elXlySVQCbsEmznw7pWqQ&usqp=CAU',
    },
     {
      id: 1,
      name: 'WATER LILY',
      botanicalname: 'Nymphaeaceae',
      specialfeatures: 'Specialized Leave Structure',
      About: ['Light : full sunlight','Fertilizer: aquatic plant fertilizer tabletes','Propagation: Seeds/Rhizomes'],
      profilePicture: 'https://images.unsplash.com/photo-1474557157379-8aa74a6ef541?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D',
    },
    
    {
      id: 2,
      name: 'HIBISCUS',
      botanicalname: 'Hibiscus',
      specialfeatures:'Medicinal purpose',
      About: ['Light : full sunlight','Fertilizer: balanced fertilizer','Propagation: stem cutting'],
      profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjYBlLY9fFudk_0eAmhNIVGw1Eb326wu42kQ&usqp=CAU',
    },
    
    
  ];
  const handleHireClick = (Gardening) => {
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.write(`
        <html>
          <head>
            <title>Gardening Details</title>
            <!-- Add your CSS styles here if needed -->
          </head>
          <body>
            <h1>${Gardening.name}</h1>
            <p>botanicalname: ${Gardening.botanicalname}</p>
            <p>specialfeatures: ${Gardening.specialfeatures}</p>
            <h2>About</h2>
            <ul>
              ${Gardening.About.map((About) => <li>${About}</li>).join('')}
            </ul>
            <!-- Add more details if needed -->
          </body>
        </html>
      `);
    } else {
      alert('Please allow pop-ups to view plant details.');
    }
  
  };

  return (
    <div style={styles.container}>
      {Gardening.map((Gardening) => (
        <div key={Gardening.id} style={styles.GardeningContainer}>
          <div style={styles.profileSection}>
            <img
              src={Gardening.profilePicture}
              style={styles.profilePicture}
            />
            <div style={styles.profileInfo}>
              <h2 style={styles.name}>{Gardening.name}</h2>
              <p style={styles.botanicalname}>{Gardening.botanicalname}</p>
              <p style={styles.specialfeatures}>SpecialFeatures: {Gardening.specialfeatures}</p>
               {/* Hire Button */}

            
            </div>
          </div>
          <div style={styles.AboutSection}>
            <h3 style={styles.sectionTitle}>About</h3>
            <ul style={styles.AboutList}>
              {Gardening.About.map((About, index) => (
                <li key={index}>{About}</li>
              ))}
            </ul>
            <button onClick={() => handleHireClick(Gardening)} style={styles.HireButton}>
                SELECT
              </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  GardeningContainer: {
    flex: '0 0 300px',
    margin: '20px',
    padding: '20px',
    background: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  profileSection: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  profilePicture: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginRight: '20px',
  },
  profileInfo: {
    flex: '1',
    textAlign: 'left',
  },
  name: {
    margin: '0',
    fontSize: '24px',
  },
  botanicalname: {
    margin: '5px 0',
    fontSize: '16px',
    color: '#555',
  },
  specialfeatures: {
    margin: '5px 0',
    fontSize: '16px',
    color: '#555',
  },
  AboutSection: {
    marginTop: '20px',
  },
  sectionTitle: {
    fontSize: '20px',
    margin: '0',
  },
  AboutList: {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
  },
 
  hireButton: {
    marginTop: '10px',
    padding: '10px',
    background: 'blue', /* Green color */
    color: 'white',
    border: 'none',
    borderRadius: '7px',
    cursor: 'pointer',
  },
 
};

export default GardeningList;