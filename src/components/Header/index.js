import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(){
    return(
        <header>
            <div>
                <div className="btn-menu">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <nav>
                    <span><Link>Página Inicial</Link></span>
                    <span><Link>Contato</Link></span>
                    <span><Link>Página Inicial</Link></span>
                    <span><Link>Página Inicial</Link></span>
                </nav>
            </div>
        </header>
    );
}