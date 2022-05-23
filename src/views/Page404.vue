<script>
export default{

}
</script>
<template>

<div class="h-full flex justify-content-center align-items-center">
    <div class="">
        <div class="flex">
            <div class="px-5">
                    <h1 class="mt-3 text-8xl text-cyan-800">:(</h1>
            </div>
            <div class="w-30rem">
                <h1>404 - Página no encontrada</h1>
                <p>Es posible que la página que está buscando haya sido eliminada debido a un cambio de nombre o no esté disponible temporalmente.</p>
                <Button @click="$router.push('/')" label="Ir al inicio" ></Button>
            </div>
        </div>
    </div>
</div>

    
</template>
