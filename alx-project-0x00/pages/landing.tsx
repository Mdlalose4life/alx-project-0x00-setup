import Button from "@/components/Button"
import Card from "@/components/Card"

const Landing: React.FC = () => {
    return (
      <div>
        <h1 className=" text-xl font-extralight">Landing Page</h1>
        <Card />
        <Button title="Small Button" styles="text-sm rounded-sm"/>
        <Button title="Medium Button" styles="text-md rounded-md"/>
        <Button title="Big Button" styles="text-lg rounded-lg"  />
      </div>
    )
  }
export default Landing