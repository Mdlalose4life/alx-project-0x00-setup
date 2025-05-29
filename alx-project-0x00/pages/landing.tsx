import Button from "@/components/Button"
import Card from "@/components/Card"

const Landing: React.FC = () => {
    return (
      <div>
        <h1 className=" text-xl font-extralight">Landing Page</h1>
        <Card/>
        <div className="p-6 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Landing Page Buttons</h1>

        {/* Small Buttons */}
        <Button title="Small - rounded-sm" styles="text-sm rounded-sm" />
        <Button title="Small - rounded-md" styles="text-sm rounded-md" />
        <Button title="Small - rounded-full" styles="text-sm rounded-full" />

        {/* Medium Buttons */}
        <Button title="Medium - rounded-sm" styles="text-base rounded-sm" />
        <Button title="Medium - rounded-md" styles="text-base rounded-md" />
        <Button title="Medium - rounded-full" styles="text-base rounded-full" />

        {/* Large Buttons */}
        <Button title="Large - rounded-sm" styles="text-lg rounded-sm" />
        <Button title="Large - rounded-md" styles="text-lg rounded-md" />
        <Button title="Large - rounded-full" styles="text-lg rounded-full" />
        </div>
      </div>
    )
  }
  export default Landing