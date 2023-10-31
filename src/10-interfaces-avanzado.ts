/*En TypeScript, puedes combinar los enums, types e interfaces de varias formas para crear
estructuras de datos complejas y precisas. */

//Enums en interfaces
{
  enum Color {
    Negro,
    Blanco,
    Morado
  }

  interface FiguraGeometrica {
    nombre: string,
    color: Color,
  }

  const rectangulo: FiguraGeometrica = {
    nombre: "rectángulo",
    color: Color.Morado
  };
  console.log("rectangulo.color", rectangulo.color);
}

//Types en Interfaces

{
  type Coordenadas = [number, number];

  interface Punto {
    ubicacion: Coordenadas,
    etiqueta: string,
}

  const punto: Punto = {
    ubicacion: [10, 5],
    etiqueta: "Punto A"
};
}

//Combinación de Enums y Types

{
  enum Size {
    Chico = "S",
    Mediano = "M",
    Grande = "L"
  }

  type Producto = {
    name: string,
    size: Size, // 👈 Enum
  };

  const camiseta: Producto = {
    name: "Camiseta",
    size: Size.Mediano
  };
}

//Interfaces, enums y types juntos

{
  enum TipoVehiculo {
    Automóvil,
    Motocicleta
  }

  type Especificaciones = {
    marca: string,
    modelo: string,
    anio: number,
  };

  interface Vehiculo {
    tipo: TipoVehiculo, // 👈 Enum
    especificaciones: Especificaciones, // 👈 Type
  }

  // Objeto
  const vehiculo: Vehiculo = {
    tipo: TipoVehiculo.Automóvil,
    especificaciones: {
      marca: "Toyota",
      modelo: "Corolla",
      anio: 2020
    }
  };
  console.info("vehiculo.tipo: ",vehiculo.tipo);
}
