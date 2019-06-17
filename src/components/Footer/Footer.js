import React from 'react';
import '../../styles/footer.css';
import Sitemap from './Sitemap';
import SitemapColumn from './SitemapColumn';
import SitemapTitle from './SitemapTitle';
import SitemapItem from './SitemapItem';

function Footer() {
    return (
        <div className='footer'>
            <Sitemap>
                <SitemapColumn>
                    <SitemapTitle label='UTN BA'/>
                    <SitemapItem label='Sitio Web'/>
                </SitemapColumn>
                <SitemapColumn>
                    <SitemapTitle label='SGA'/>
                    <SitemapItem label='Sitio Web'/>
                </SitemapColumn>
                <SitemapColumn>
                    <SitemapColumn label='Departamentos'/>
                    <SitemapItem label='Sistemas'/>
                    <SitemapItem label='Electrónica'/>
                    <SitemapItem label='Industrial'/>
                    <SitemapItem label='Química'/>
                    <SitemapItem label='Civil'/>
                    <SitemapItem label='Mecánica'/>
                    <SitemapItem label='Eléctrica'/>
                    <SitemapItem label='Textil'/>
                    <SitemapItem label='Naval'/>
                    <SitemapItem label='Pregrados'/>
                    <SitemapItem label='Posgrados'/>
                </SitemapColumn>
                <SitemapColumn>
                    <SitemapTitle label='Social'/>
                    <SitemapItem label='Facebook'/>
                    <SitemapItem label='Twitter'/>
                    <SitemapItem label='Youtube'/>
                </SitemapColumn>
            </Sitemap>
            <div className='footer-copyright-message'>
                2019 © SGA UTN FRBA
            </div>
        </div>
    );
}

export default Footer;