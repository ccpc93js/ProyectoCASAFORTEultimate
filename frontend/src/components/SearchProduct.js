import React from 'react'
import Descuento from './Descuento'
import LoadingBox from './LoadingBox'
import MessageBox from './MessageBox'

export default function SearchProduct({ val, key, loading, error }) {
    return (
        <a href={`/producto/${val._id}/${val.info.replace(/ /g, "-")}`}>

            <div className="product-card-search " >
                {(val.enOferta === true)?
                    < Descuento producto={val}/>
                    :("")
                }
                {
                    loading ? (
                        <LoadingBox></LoadingBox>
                    ) : error ? (
                        <MessageBox variant="danger">{error}</MessageBox>) : (
                        <>

                            <div className="product-image-search">

                                <div className="product-image__body-search ">
                                    <img src={val.imagen} alt="" className="product-image__img imgnormalP-search " />
                                </div>
                            </div>
                            <div className="product-card__info-search">
                                <div className="elementSearch-p"><h3>{val.info}</h3></div>
                                {/* <div className="elementSearch-p">    
                   {
            
                      (val.enOferta ===false)?(
                        <p>{formatCurrency(val.precio )}</p>
                      ):(
                        <div className="producto-en-oferta_precio">
                        <p className="p1"> {formatCurrency(val.precio )}</p>
                          <p className="p2"> {formatCurrency(val.precioDeOferta)}</p>

                        </div>
                        
                      )
                  }
              </div> */}
                            </div>


                        </>
                    )}


            </div>
        </a>
    )
}
