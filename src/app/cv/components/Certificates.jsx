import {BoxArrowUpRight} from 'react-bootstrap-icons'

const Cert = ({title, issuer, url, date, className}) => (
  <div className={className}>
    <h5>{title}</h5>
    <h6>{issuer}<a
      href={url}
      target="_blank"><BoxArrowUpRight className="ms-1" /></a></h6>
    <span>{date}</span>
  </div>
)

const Certificates = () => (
  <section id="certs" className="mt-4">
    <h4>Certifications:</h4>
    <Cert
      title="Full Stack Open TypeScript"
      issuer="University of Helsinki"
      url="https://studies.cs.helsinki.fi/stats/api/certificate/fs-typescript/en/ea517b7ac62becf5f45e0a363679fc41"
      date="Mar 2025"
      className=""
    />
    <Cert
      title="Full Stack Open GraphQL"
      issuer="University of Helsinki"
      url="https://studies.cs.helsinki.fi/stats/api/certificate/fs-graphql/en/0aa3bf9ac39d9f828212b8399103fd98"
      date="Jan 2025"
      className="mt-3"
    />
    <Cert
      title="ISTQB® Foundation Level"
      issuer="Hungarian Testing Board"
      url="https://www.linkedin.com/in/timagribanov/details/certifications/1733215049105/single-media-viewer/?type=DOCUMENT&profileId=ACoAAC3kAGsBjzdQEAXBASCntf82o4NQwu9M9j8"
      date="Nov 2024"
      className="mt-3"
    />
    <Cert
      title="ISTQB Foundation in Software Testing Course Completion"
      issuer="Component Soft"
      url="https://app.diplomasafe.com/en-US/diploma/d8c6fd15fa09689f48d5e6347a65775a2ed0d4378"
      date="Oct 2024"
      className="mt-3"
    />
    <Cert
      title="Design Patterns in Java"
      issuer="IQSOFT – EduTech Magyarország Kft."
      url="https://www.linkedin.com/in/timagribanov/details/certifications/1728303425886/single-media-viewer/?type=DOCUMENT&profileId=ACoAAC3kAGsBjzdQEAXBASCntf82o4NQwu9M9j8"
      date="Sep 2024"
      className="mt-3"
    />
    <Cert
      title="Hungarian Course Certification of Completion (EF Level 2 – CEFR A1.2)"
      issuer="EF Education First"
      url="https://www.linkedin.com/in/timagribanov/details/certifications/1721727107113/single-media-viewer/?type=DOCUMENT&profileId=ACoAAC3kAGsBjzdQEAXBASCntf82o4NQwu9M9j8"
      date="Jul 2024"
      className="mt-3"
    />
    <Cert
      title="Miracles of Human Language: an Introduction to Linguistics"
      issuer="Coursera"
      url="https://coursera.org/verify/JEWN5GRFW4BA"
      date="Mar 2024"
      className="mt-3"
    />
    <Cert
      title="Java and Web Application Security"
      issuer="SCADEMY"
      url="https://cert.scademy.com/certificate/sTeRJeDabhwXghKrwEyy"
      date="Dec 2023"
      className="mt-3"
    />
    <Cert
      title="Full Stack Open"
      issuer="University of Helsinki"
      url="https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/0e6a9585c1258c11e85eaa5eeeb26ae8"
      date="Oct 2023"
      className="mt-3"
    />
    <Cert
      title="Java Programming II"
      issuer="University of Helsinki"
      url="https://certificates.mooc.fi/validate/p8m0mriul1i"
      date="Sep 2023"
      className="mt-3"
    />
    <Cert
      title="Scientific Computing with Python"
      issuer="freeCodeCamp"
      url="https://www.freecodecamp.org/certification/timagribanov/scientific-computing-with-python-v7"
      date="Aug 2023"
      className="mt-3"
    />
    <Cert
      title="EF SET English Certificate (77/100 C2 Proficient)"
      issuer="EF SET"
      url="https://www.efset.org/cert/ev5ebK"
      date="Jul 2023"
      className="mt-3"
    />
    <Cert
      title="Java Programming I"
      issuer="University of Helsinki"
      url="https://certificates.mooc.fi/validate/4rmkvb0edg3"
      date="Jun 2023"
      className="mt-3"
    />
    <Cert
      title="Java level 1"
      issuer="GeekBrains"
      url="https://gb.ru/certificates/1938761.en"
      date="Aug 2022"
      className="mt-3"
    />
    <Cert
      title="JavaScript Algorithms and Data Structures"
      issuer="freeCodeCamp"
      url="https://freecodecamp.org/certification/timagribanov/javascript-algorithms-and-data-structures"
      date="Feb 2022"
      className="mt-3"
    />
    <Cert
      title="Responsive Web Design"
      issuer="freeCodeCamp"
      url="https://freecodecamp.org/certification/timagribanov/responsive-web-design"
      date="Feb 2022"
      className="mt-3"
    />
    <Cert
      title="Web Technologies Vulnerabilities Security"
      issuer="GeekBrains"
      url="https://gb.ru/certificates/1651272.en"
      date="Jan 2022"
      className="mt-3"
    />
    <Cert
      title="Databases"
      issuer="GeekBrains"
      url="https://gb.ru/certificates/1238954.en"
      date="May 2021"
      className="mt-3"
    />
    <Cert
      title="HTML&CSS"
      issuer="GeekBrains"
      url="https://gb.ru/certificates/663875.en"
      date="Oct 2019"
      className="mt-3"
    />
  </section>
)

export default Certificates