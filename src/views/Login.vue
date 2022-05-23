<template>
  <div
    class="
      h-full
      flex
      justify-content-center
      align-items-center
      scalein
      animation-delay-200 animation-duration-500 animation-iteration-1
    "
  >
    <Card class="w-5">
      <p-progressbar mode="indeterminate" style="height: 0.5em"></p-progressbar>
      <template #header>
        <div class="flex justify-content-center">
          <Logo class="w-12rem" />
        </div>
        <h3 class="flex justify-content-center m-0">Iniciar sesión</h3>
      </template>
      <template #content>
        <form>
          <div class="grid p-fluid">
            <div class="col-12">
              <span class="p-input-icon-left">
                <i class="pi pi-envelope" />
                <Input
                  placeholder="ejemplo@correo.com.co"
                  type="email"
                  name="email"
                  id="email"
                />
              </span>
            </div>
            <div class="col-12">
              <span class="p-input-icon-left">
                <i class="pi pi-key" />

                <Password
                  placeholder="Contraseña"
                  type="password"
                  name="password"
                  id="password"
                />
              </span>
            </div>
            <div class="col-12">
              <span class="p-input-icon-left">
                <Button @click="$router.push('/dashboard')" label="Iniciar sesion"></Button>
              </span>
            </div>
          </div>
        </form>
      </template>
    </Card>
  </div>
</template>
