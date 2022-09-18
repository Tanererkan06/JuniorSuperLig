import { useEffect } from "react";
import { Container } from "react-bootstrap";
import "./Blog.css";
import { BiLike, BiComment, BiShare } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getAllNews } from '../../redux-new/actions/news';
import { TypographyStylesProvider } from '@mantine/core';

const Blog = () => {
  const dispatch = useDispatch();

  const news = useSelector(state => state.news);
  const activeSehir = useSelector(state => state.currentSehir.currentSehir);
  useEffect(() => {
    dispatch(getAllNews());
  }, []);

  return (
    <div id="blog" className="blogContainer py-5">
      <Container>
        <div className="sub-heading border-end border-1 text-light border-light pe-3 text-end">
          <span>Haberler</span>
          <p>Son haberlere buradan ulaşabilirsiniz.</p>
        </div>
        <div className="row my-5">

          <div className="col-12 col-md-12 col-lg-12 col-xl-12">
            <div className="row">
              {
                news.length > 0
                  ? news.filter(item => item.sehir === activeSehir).map((item, index) => {
                    return (
                        <div className="col-12 col-md-4 col-lg-4 col-xl-4" key={index}>
                          <TypographyStylesProvider>
                          <div className="single-post">
                            <div className="blog-image">
                              <img
                                src={require("../../utilities/images/blog/blog-two.png")}
                                alt=""
                                className="w-100"
                              />{/* <img src={item.resim} alt="Haber fotoğrafı" className="thumbnail" /> */}
                            </div>
                            <div className="blog-text">
                              <div className="mt-3">
                                <span className="subTitle"><div dangerouslySetInnerHTML={{ __html: item.baslik.replaceAll('&lt;', '<') }} /></span>
                                <p>
                                  <div dangerouslySetInnerHTML={{ __html: item.kisaicerik.replaceAll('&lt;', '<') }} /><Link className="text-primary" to={"/blogDetails/"+ item.id}>Detayları Gör</Link>
                                </p>
                              </div>
                            </div>
                          </div>
                          </TypographyStylesProvider>
                        </div>
              
                      )})
                      : <div>Yükleniyor..</div>
                }
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
