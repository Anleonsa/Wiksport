USE proyecto_estructuras;

#drop index  idx_ejercicio_categoria on Ejercicio;
create index idx_ejercicio_categoria ON Ejercicio(Categoria);
#drop index idx_ejercicio_nombre_ejercicio on Ejercicio;
create index idx_ejercicio_nombre_ejercicio on Ejercicio(Nombre_ejercicio);
