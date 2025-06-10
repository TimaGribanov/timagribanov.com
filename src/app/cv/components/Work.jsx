import {BoxArrowUpRight} from 'react-bootstrap-icons'

const Experience = ({title, company, url, time, place, desc, className}) => (
  <div className={className}>
    <h5>{title}</h5>
    <h6>{company}<a href={url} target="_blank"><BoxArrowUpRight className="ms-1" /></a></h6>
    <span>{time}</span><br/>
    <span>{place}</span><br/>
    <p>{desc}</p>
  </div>
)

const Work = () => (
  <section id="work">
    <h4>Work experience:</h4>
    <Experience
      title="Experienced Test Automation Engineer"
      company="Ericsson"
      url="https://ericsson.com"
      time="Jul 2023 – "
      place="Budapest, Hungary"
      desc="As a part of a testing team I'm responsible for developing test cases to test a radio network HW."
      className=""
    />
    <Experience
      title="Verification Engineer"
      company="Ericsson"
      url="https://ericsson.com"
      time="Mar 2023 – Jun 2023"
      place="Budapest, Hungary"
      desc="As a part of a testing team I'm responsible for developing test cases to test a radio network HW."
      className="mt-3"
    />
    <Experience
      title="Mobile Networks Support & Integration Engineer"
      company="Protei"
      url="https://protei.com"
      time="Sep 2022 – Feb 2023"
      place="St Petersburg, Russia (remotely from Dushanbe, Tajikistan)"
      desc="Integration (installation and configuration) and technical support (troubleshooting and issues
        solving) of Mobile Networks products, such as SMSC platform, SMS Firewall, STP, CAMEL Gateway,
        DRA, HLR/HSS."
      className="mt-3"
    />
    <Experience
      title="Mobile Networks Support & Integration Engineer"
      company="Protei"
      url="https://protei.com"
      time="Apr 2020 – Sep 2022"
      place="St Petersburg, Russia"
      desc="Integration (installation and configuration) and technical support (troubleshooting and issues
        solving) of Mobile Networks products, such as SMSC platform, SMS Firewall, STP, CAMEL Gateway,
        DRA, HLR/HSS."
      className="mt-3"
    />
    <Experience
      title="Billing Support & Integration Engineer"
      company="Protei"
      url="https://protei.com"
      time="Oct 2019 – Apr 2020"
      place="St Petersburg, Russia"
      desc="Integration (installation and configuration) and technical support (troubleshooting and issues
        solving) of OCS platform products."
      className="mt-3"
    />
    <Experience
      title="Billing Support & Integration Technician"
      company="Protei"
      url="https://protei.com"
      time="Jun 2019 – Oct 2019"
      place="St Petersburg, Russia"
      desc="Integration (installation and configuration) and technical support (troubleshooting and issues
        solving) of OCS platform products."
      className="mt-3"
    />
    <Experience
      title="Mobile Networks Support & Integration Technician"
      company="Protei"
      url="https://protei.com"
      time="Nov 2018 – May 2019"
      place="St Petersburg, Russia"
      desc="Integration (installation and configuration) and technical support (troubleshooting and issues
        solving) of Mobile Networks products, such as SMSC platform, SMS Firewall, STP, CAMEL Gateway,
        DRA, HLR/HSS."
      className="mt-3"
    />
  </section>
)

export default Work