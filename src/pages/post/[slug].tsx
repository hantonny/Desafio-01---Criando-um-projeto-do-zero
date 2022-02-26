import { GetStaticPaths, GetStaticProps } from 'next';
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';
import Header from '../../components/Header';

import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Header />
      <img src="/teste.png" alt="imagem" className={styles.banner} />
      <main className={commonStyles.container}>
        <div className={styles.post}>
          <div className={styles.postTop}>
            <h1>Algum titulo de exemplo</h1>
            <ul>
              <li>
                <FiCalendar />
                26 Fev 2022
              </li>
              <li>
                <FiUser />
                Hantonny Korrea
              </li>
              <li>
                <FiClock />5 min
              </li>
            </ul>
          </div>
          <article>
            <h2>Titulo seção</h2>
            <p>
              Mussum Ipsum, cacilds <strong>vidis litro abertis</strong>.
              Admodum accumsan disputationi eu sit. Vide electram sadipscing et
              per.Paisis, filhis, espiritis santis.Posuere libero varius. Nullam
              a nisl ut ante blandit hendrerit. Aenean sit amet nisi.A ordem dos
              tratores não altera o pão duris.Cevadis im ampola pa arma uma
              pindureta.Suco de cevadiss, é um leite divinis, qui tem lupuliz,
              matis, aguis e fermentis.Sapien in monti palavris qui num
              significa nadis i pareci latim.Em pé sem cair, deitado sem dormir,
              <a href="/"> sentado sem cochilar e fazendo pose.</a>
            </p>
          </article>
        </div>
      </main>
    </>
  );
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient();
//   const posts = await prismic.query(TODO);

//   // TODO
// };

// export const getStaticProps = async context => {
//   const prismic = getPrismicClient();
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };
