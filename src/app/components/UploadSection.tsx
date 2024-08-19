import Image from "next/image";
import UploadIcon from "../../../public/upload_file.png";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import GenerateAISvg from "../SVG/GenerateAIIcon";
import { useState, useEffect } from "react";
import CrossSvg from "../SVG/CrossIcon";
import FileImage from "../../../public/615_frame.png";
import TickMark from "../../../public/Vector.png";
import { useRouter } from "next/router";
import Link from "next/link";

export default function UploadSection() {
  const router = useRouter();
  const [buttonDisable, setButtonDisabled] = useState(true);
  const [uploadedFile, setUploadedFile] = useState<any>(null);
  const [dragging, setDragging] = useState(false);
  const [courseworkType, setCourseworkType] = useState("");
  const [subject, setSubject] = useState("");
  const [essayTitle, setEssayTitle] = useState("");

  useEffect(() => {
    const savedFile = localStorage.getItem("uploadedFile");
    const savedCourseworkType = localStorage.getItem("courseworkType");
    const savedSubject = localStorage.getItem("subject");
    const savedEssayTitle = localStorage.getItem("essayTitle");

    if (savedFile) {
      setUploadedFile(JSON.parse(savedFile));
      setButtonDisabled(false);
    }
    if (savedCourseworkType) setCourseworkType(savedCourseworkType);
    if (savedSubject) setSubject(savedSubject);
    if (savedEssayTitle) setEssayTitle(savedEssayTitle);
  }, []);

  const saveToLocalStorage = () => {
    if (uploadedFile)
      localStorage.setItem("uploadedFile", JSON.stringify(uploadedFile));
    localStorage.setItem("courseworkType", courseworkType);
    localStorage.setItem("subject", subject);
    localStorage.setItem("essayTitle", essayTitle);
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (
      file &&
      file.size <= 25 * 1024 * 1024 &&
      file.type === "application/pdf"
    ) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const base64File = e.target.result;
        const fileData = {
          name: file.name,
          type: file.type,
          data: base64File,
        };
        setUploadedFile(fileData);
        setButtonDisabled(false);
        localStorage.setItem("uploadedFile", JSON.stringify(fileData));
        saveUploadHistory(fileData);
      };
      reader.readAsDataURL(file);
    } else {
      alert("File must be a PDF and less than 25MB.");
    }
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    setButtonDisabled(true);
    localStorage.removeItem("uploadedFile");
  };

  const handleDragOver = (event: any) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (event: any) => {
    event.preventDefault();
    setDragging(false);

    const file = event.dataTransfer.files[0];
    if (
      file &&
      file.type === "application/pdf" &&
      file.size <= 25 * 1024 * 1024
    ) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const base64File = e.target.result;
        const fileData = {
          name: file.name,
          type: file.type,
          data: base64File,
        };
        setUploadedFile(fileData);
        setButtonDisabled(false);
        localStorage.setItem("uploadedFile", JSON.stringify(fileData));
        saveUploadHistory(fileData);
      };
      reader.readAsDataURL(file);
    } else {
      alert("File must be a PDF and less than 25MB.");
    }
  };

  const saveUploadHistory = (fileData: any) => {
    const history = JSON.parse(localStorage.getItem("uploadHistory") || "[]");
    const currentDateTime = new Date().toLocaleString();

    const newHistoryEntry = {
      name: fileData.name,
      courseworkType,
      subject,
      essayTitle,
      dateTime: currentDateTime,
    };

    history.push(newHistoryEntry);
    localStorage.setItem("uploadHistory", JSON.stringify(history));
  };

  const handleFormSubmit = () => {
    saveToLocalStorage();
    router.push("evaluate");
  };

  return (
    <div className="border border-[#D6DFE4] lg:max-w-[500px]  xl:mx-auto 2xl:min-w-[740px] 2xl:max-w-[1100px]  lg:min-w-[500px] xl:max-w-[810px] bg-[#f3f5f8] p-2 md:p-4 rounded-[24px] flex flex-col items-center w-full max-w-[400px] mx-auto">
      <div className="w-full">
        <div className="flex flex-col items-center">
          <div
            className={`bg-[#FCFBFD] p-2 rounded-lg border-2 h-[250px] min-h-[250px] lg:h-[270px] lg:min-h-[270px] border-dashed w-full flex flex-col items-center justify-center text-center ${
              dragging ? "border-[#6947BF] bg-[#F3F0FF]" : "border-[#D6DFE4]"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {uploadedFile ? (
              <div className="flex items-center relative justify-between bg-white p-2 rounded-xl w-[15rem] h-[76px] border">
                <div className="flex items-center gap-3">
                  <Image
                    src={FileImage}
                    alt="File icon"
                    width={60}
                    height={60}
                  />
                  <Image
                    src={TickMark}
                    alt="File icon"
                    width={28}
                    height={28}
                  />
                  <span className="overflow-hidden w-[12rem] text-ellipsis whitespace-nowrap text-[#7A8196]">
                    {uploadedFile.name}
                  </span>
                </div>
                <button
                  className="absolute  -top-[8px] -right-[0.5rem]"
                  onClick={handleRemoveFile}
                >
                  <div className="w-5 h-5 p-1 bg-white shadow-lg  rounded-full border border-[#C1CCD6] flex justify-center items-center">
                    <CrossSvg />
                  </div>
                </button>
              </div>
            ) : (
              <>
                <div className="w-[10%]">
                  <Image
                    src={UploadIcon}
                    alt="Upload PDF"
                    className="mb-4 mx-auto"
                  />
                </div>
                <p className="text-[#7A8196] text-[16px] font-mont">
                  Drag and drop a PDF
                </p>
                <p className="text-[#7A8196] text-[12px] font-bricolage">
                  *Limit 25 MB per file.
                </p>
                <input
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  id="upload-file"
                  onChange={handleFileChange}
                />
                <label
                  htmlFor="upload-file"
                  className="bg-[#FCFBFD] text-[#6947BF] font-[800] border mt-6 border-[#CEC4EB] text-[15px] px-6 py-2 rounded-[20px] cursor-pointer inline-block"
                >
                  Upload your file
                </label>
              </>
            )}
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <div className="text-[#7A8196] text-[14px] font-bricolage">
            Select your course & subjects*
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <Select
              value={courseworkType}
              onValueChange={(value) => setCourseworkType(value)}
            >
              <SelectTrigger className="w-[187px] rounded-full">
                <SelectValue placeholder="Coursework Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>1 Month</SelectLabel>
                  <SelectItem value="option1">3 Month</SelectItem>
                  <SelectItem value="option2">6 Month</SelectItem>
                  <SelectItem value="option3">I year</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select
              value={subject}
              onValueChange={(value) => setSubject(value)}
            >
              <SelectTrigger className="w-[187px] rounded-full">
                <SelectValue placeholder="Subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>English</SelectLabel>
                  <SelectItem value="subject1">Computer</SelectItem>
                  <SelectItem value="subject2">Physics</SelectItem>
                  <SelectItem value="subject3">Chemistry</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="text-[#7A8196] text-[14px] font-bricolage">
            Enter your essay title*
          </div>
          <Input
            className="w-full hover:outline-none focus:outline-none active:outline-none focus:border-[#FF4800] hover:border-[#FF4800] active:border-[#FF4800] p-3 md:max-w-[322px] border rounded-full bg-white focus-visible:shadow-none focus-visible:outline-none focus-visible:ring-0 "
            type="text"
            placeholder="how nation work"
            value={essayTitle}
            onChange={(e) => setEssayTitle(e.target.value)}
          />
        </div>

        <Button
          className={`rounded-full  group  mt-6 ${
            buttonDisable
              ? "bg-[#ADB8C9] hover:bg-[#ADB8C9]"
              : "bg-[#6947BF] hover:bg-[#6947BF]"
          }   gap-2 text-white py-3 flex`}
          disabled={buttonDisable}
          onClick={handleFormSubmit}
        >
          <div
            className={`w-5 h-5 rounded-full  flex ${
              buttonDisable ? "bg-[#EAF0F2]" : "bg-[#ffffff]"
            } justify-center items-center`}
          >
            <GenerateAISvg fill={`${buttonDisable ? "#ADB8C9" : "#6947BF"}`} />
          </div>
          Evaluate your Score
        </Button>
      </div>
    </div>
  );
}
