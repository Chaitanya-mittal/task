function App() {
  return (
    <main>
      <section className="firstSection">
        <div></div>
        <div>
          <img src="/logo.png" alt="logo" className="logo" />
        </div>
        <div className="award-box">
          <img src="/1.png" alt="award" className="award-img" />
        </div>

        <div className="left">
          <h4>
            {" "}
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h4>
          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.{" "}
            </li>
          </ul>
          <img src="/2.png" alt="honor-img" className="honor-img" />
          <p>
            Government of India has awarded the{" "}
            <strong>"National Energy Conservation Award 2018"</strong>. Mr. G.
            Selvaraj, Joint Managing Director of C.R.I. Group received the award
            from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar
            Singh, Honorable Minister of State.
          </p>
        </div>
      </section>
      <section className="section2">
        <p>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.{" "}
        </p>
        <img src="/3.png" alt="machines" />
        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>

        <hr></hr>
        <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
        <p>
          CHEMICALS & PROCESS | POWER WATER & WASTE WATER | OILS & GAS | PHARMA
          | SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL &
          MINING | FOOD & BEVERAGE | PETROCHEMICAL & REFINERIES | SOLAR |
          BUILDING | HVAC | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL
        </p>
      </section>
      <footer>
        <div>
          <span className="fa-solid fa-phone"></span>
          <span>Toll free 1800 200 1234</span>
        </div>
        <div>
          <span className="fa-brands fa-facebook"></span>
          <span>www.facebook.com/cripumps</span>
        </div>
        <div>
          <span className="fa-solid fa-globe"></span>
          <span>www.crigroups.com</span>
        </div>
      </footer>
    </main>
  );
}

export default App;
