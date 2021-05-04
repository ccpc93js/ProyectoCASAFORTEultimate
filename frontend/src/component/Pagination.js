import React from 'react'
import './Pagination.css'

function Pagination() {
    return (
        <div>
            <div class="products-view__pagination">
<ul class="pagination justify-content-center">
<ul class="pagination" role="navigation">
<li class="page-item disabled" aria-disabled="true" aria-label="« Anterior">
<span class="page-link" aria-hidden="true">
<span class="d-none d-md-block">‹</span>
<span class="d-block d-md-none">« Anterior</span>
</span>
</li>
<li class="page-item active d-none d-md-block" aria-current="page"><span class="page-link">1</span></li>
<li class="page-item d-none d-md-block"><button type="button" class="page-link" wire:click="gotoPage(2)">2</button></li>
<li class="page-item d-none d-md-block"><button type="button" class="page-link" wire:click="gotoPage(3)">3</button></li>
<li class="page-item d-none d-md-block"><button type="button" class="page-link" wire:click="gotoPage(4)">4</button></li>
<li class="page-item d-none d-md-block"><button type="button" class="page-link" wire:click="gotoPage(5)">5</button></li>
<li class="page-item d-none d-md-block"><button type="button" class="page-link" wire:click="gotoPage(6)">6</button></li>
<li class="page-item d-none d-md-block"><button type="button" class="page-link" wire:click="gotoPage(7)">7</button></li>
<li class="page-item d-none d-md-block"><button type="button" class="page-link" wire:click="gotoPage(8)">8</button></li>
<li class="page-item d-none d-md-block"><button type="button" class="page-link" wire:click="gotoPage(9)">9</button></li>
<li class="page-item d-none d-md-block"><button type="button" class="page-link" wire:click="gotoPage(10)">10</button></li>
<li class="page-item d-none d-md-block"><button type="button" class="page-link" wire:click="gotoPage(11)">11</button></li>
<li class="page-item">
<button type="button" class="page-link" wire:click="nextPage" rel="next" aria-label="Siguiente »">
<span class="d-block d-md-none">Siguiente »</span>
<span class="d-none d-md-block">›</span>
</button>
</li>
</ul>
</ul>
</div>
            
        </div>
    )
}

export default Pagination
