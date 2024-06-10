import { Link } from 'react-router-dom';
import style from './FooterContacts.module.scss';
import { Breadcrumbs } from '../Breadcrumbs';

interface Contact {
  photo: string;
  name: string;
  linkedIn: string;
  github: string;
  mail: string;
}
export const FooterContacts = () => {
  const contacts: Contact[] = [
    {
      photo: 'https://avatars.githubusercontent.com/u/146917675?v=4',
      name: 'Tokmakov Yevhenii',
      linkedIn: 'https://www.linkedin.com/in/yevhenii-tokmakov/',
      github: 'https://github.com/yevtok',
      mail: 'yevheniitokmakov@gmai.com',
    },
    {
      photo: 'https://avatars.githubusercontent.com/u/71509028?v=4',
      name: 'Sydun Artem',
      linkedIn: 'https://www.linkedin.com/in/artem-sydun-6489a12a5/',
      github: 'https://github.com/ArtemSydun',
      mail: 'artemsydun@gmail.com',
    },
    {
      photo: 'https://avatars.githubusercontent.com/u/107812456?v=4',
      name: 'Yurkovskyi Mykhailo',
      linkedIn: 'https://www.linkedin.com/in/mykhailo-yurkovskyi/',
      github: 'https://github.com/mykhailoyurkovskyi',
      mail: 'mykhailoyurkovskyi@gmail.com',
    },
    {
      photo: 'https://avatars.githubusercontent.com/u/75914714?v=4',
      name: 'Kaminska Emiliia',
      linkedIn: 'https://www.linkedin.com/in/emiliia-kaminska-259b7922b/',
      github: 'https://github.com/emilionila',
      mail: 'emiliia.kaminska.dev@gmail.com',
    },
    {
      photo: 'https://avatars.githubusercontent.com/u/142099655?v=4',
      name: 'Malyholovka Ostap',
      linkedIn: 'https://www.linkedin.com/in/ostap-malyholovka-5141a52a4/',
      github: 'https://github.com/OstinM',
      mail: 'maligolovkaostap@gmail.com',
    },
    {
      photo: 'https://avatars.githubusercontent.com/u/143890962?v=4',
      name: 'Berezhna Maria',
      linkedIn: 'https://www.linkedin.com/in/maria-berezhna-7804512a7/',
      github: 'https://github.com/mberezhna',
      mail: 'mariabereahna@gmail.com',
    },
  ];

  return (
    <div className={style.FooterContacts}>
      <Breadcrumbs />
      <h2 className={style.FooterContacts__mainTitle}>
        Searching for new developers?
        <br />
        Look no further – we are your best choice!
      </h2>
      <p className={style.FooterContacts__mainText}>
        Our dedicated team comprises creative and self-motivated full-stack
        developers who have not only
        developed this service but are also ready to take on new challenges.
        Whether you are in need of web
        development, mobile app creation, or any other
        software-related tasks, we&apos;ve got you covered.
        <br />
        {' '}
        <br />
        Feel free to reach out to any of our team members using the contact
        links provided below. We&apos;re open to discussions, collaborations,
        and excited about new opportunities.
        Your project&apos;s success is our priority,
        and we bring a wealth of expertise to the table.
        <br />
        <br />
        Get in touch with us today, and let&apos;s turn your ideas into reality!
      </p>
      <div className={style.FooterContacts__cardContainer}>
        {contacts.map((contact) => (
          <div className={style.FooterContacts__card} key={contact.github}>
            <img
              src={contact.photo}
              alt="team member"
              className={style.FooterContacts__personImg}
            />
            <h4 className={style.FooterContacts__PersonName}>{contact.name}</h4>
            <div className={style.FooterContacts__links}>
              <Link to={contact.linkedIn}>
                <img
                  src="https://cdn-icons-png.flaticon.com/256/174/174857.png"
                  alt="linkedin link"
                  className={style.FooterContacts__linkItem}
                />
              </Link>
              <Link to={contact.github}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="github link"
                  className={style.FooterContacts__linkItem}
                />
              </Link>
              <a href={`mailto:${contact.mail}`}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/281/281769.png"
                  alt="gmail link"
                  className={style.FooterContacts__linkItem}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
