<template>
<div class="absolute right" >
      <MenuSuperior />
</div>
  

  <MenuLateral />
  <div class="card">
    <div class="flex card-container indigo-container">
        <div class="flex-1 h-4rem bg-indigo-500 text-white font-bold text-center p-4 border-round">1</div>
        <div class="flex-1 h-4rem bg-indigo-500 text-white font-bold text-center p-4 border-round mx-4">2</div>
        <div class="flex-1 h-4rem bg-indigo-500 text-white font-bold text-center p-4 border-round">3</div>
    </div>
</div>

<div class="card">
    <div class="relative card-container blue-container">
        <div class="static bg-blue-100 p-4 border-round" style="min-width: 300px; min-height: 150px;">
            <p class="font-bold text-gray-900">Static</p>
            <div class="absolute bottom-0 left-0 bg-blue-500 border-round p-4 font-bold text-white" style="min-width: 120px; min-height: 70px">
                Absolute
            </div>
        </div>
    </div>
</div>
</template>