import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">¡Bienvenido!</h1>
          <p className="py-6">
            En este portal podrás encontrar las mallas curriculares de las
            carreras pertenecientes a la Universidad Católica del Norte
          </p>
          <Link href="/careers" className="btn btn-primary">
            Comencemos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
