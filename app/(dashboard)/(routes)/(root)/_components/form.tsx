import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormField, FormItem, FormLabel, FormDescription, FormMessage } from "@/components/ui/form"
import { Combobox } from '@/components/ui/combobox'
import { toast } from "@/components/ui/use-toast"
import { ChevronDown } from "lucide-react"

type Option = {
  value: string;
  label: string;
};

type Props = {
  label: string; // Agregar label prop
  options: Option[];
  value: string;
  onChange: (value: string) => void;
};

export function ComboboxForm({ label, options, value, onChange }: Props) { // Recibir label prop
  const FormSchema = z.object({
    language: z.string({
      required_error: "Please select a language.",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem className="flex flex-col mb-7">
              <FormLabel className="mb-2">{label}</FormLabel> {/* Usar label prop */}
              <Combobox
                options={options}
                value={field.value}
                onChange={onChange}
              />
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
