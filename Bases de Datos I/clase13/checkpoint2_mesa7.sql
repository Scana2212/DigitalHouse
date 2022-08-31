Mesa 7: Gonzalo Meljibar, Scanavino Agustin, Garavito Carlos y Buitrago Thomas

-- 1-Listar todos los huéspedes cuyo nombre comience con la letra "S". Se debe mostrar id como "Número de huésped", apellido y nombre. 

select * from huesped 
WHERE NOMBRE LIKE 's%';

-- 2- Mostrar el número de legajo del empleado con domicilio "Av. Rosalind Franklin 600". 

SELECT legajo, nombre, domicilio FROM empleado WHERE domicilio like 'Av. Rosalind Franklin 600';

-- 3- Se requiere saber cuál es el mayor importe registrado en las reservas. 

select max(importe), count(huesped_id) from reserva group by importe having max(importe) order by max(importe) desc limit 1 ;

-- 4- Listar las reservas realizadas con números 15, 19, 21, 35. 

select * from reserva where (id = 15 or id = 19 or id = 21 or id = 35);
-- select * from reserva where id in (15, 19, 21, 35);

-- 5- Calcular el importe total recaudado para la habitación número 40. El reporte debe tener dos columnas denominadas "Número de habitación " y el "Importe Total".

select sum(importe) as 'Importe total', habitacion_numero as 'Número de habitación' from checkin
where habitacion_numero = 40;

-- 6. Listar de manera ordenada (fecha de nacimiento), los empleados que no pertenezcan al sector 3 y que la fecha de nacimiento sea mayor que 3/9/1989 o
-- igual a 7/11/1986.

select legajo, fecha_nacimiento, sector_id from empleado
where (fecha_nacimiento > "1989-07-03" or fecha_nacimiento = "1986-11-7") and sector_id != 3
order by fecha_nacimiento desc;

-- 7. Listar los importes de las reservas con valor entre $10499,50 a $12000,00 (ordenarlos por el importe de mayor a menor).
-- select * from reserva

select id, importe from reserva
where (importe > "10499.50") and (importe < "12000.00")
order by importe desc;

-- 8. Mostrar el quinto importe del check-in realizado con menor valor
select * from checkin
order by importe
limit 1 offset 4;

-- 9- Mostrar el check-in con mayor importe. Este reporte debe contener el número del check-in, fecha de entrada y el importe. 

select id, fecha_entrada, max(importe) as importe_maximo
from checkin;

-- 10- Mostrar las diez reservas con menor importe. Este reporte debe contener el número de reserva, importe y el número del servicio. 

select id, importe, servicio_extra_id from reserva 
order by importe 
limit 10;


-- 11. Listar las reservas registradas entre 14/07/21 al 15/08/21 (ordenarlos por fecha)
SELECT * FROM reserva
WHERE fecha BETWEEN "2020-07-14 00:00:00" and "2021-08-15 00:00:00"
order by fecha;

-- 12. Listar en forma ordenada los check-in que tengan un importe superior o igual a
-- $34125,00 y con fecha de salida inferior a 26/6/2020.
SELECT * FROM checkin
where importe >= 34125.00 and fecha_salida < "2020-06-26 10:00:00"
ORDER BY id;

-- 13. Listar todos los empleados cuyo nombre termine con los caracteres "ia". Se debe
-- mostrar el legajo, apellido, nombre y teléfono móvil.

SELECT legajo, apellido, nombre,telefono_movil FROM empleado
WHERE nombre like "%ia";

-- 14. Se desea conocer cuál es el importe promedio de las reservas que se hayan
--  en efectivo.

SELECT avg(importe) FROM reserva
WHERE forma_pago_id = 1;

-- 15. Mostrar el tercer check-in con mayor importe pagado con tarjeta de crédito.

select * from checkin
where forma_pago_id = 3
order by importe desc
limit 1 offset 2;